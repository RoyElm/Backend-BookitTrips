const dal = require("../data-access-layer/dal");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");

//Get all vacations with Follow order from the most followed to down.
async function getAllVacationsAsync() {
    const sql = `SELECT B.vacationId,B.destination,B.description,
                    B.fromDate,B.toDate,B.price,B.imageFileName,
                    Count(F.vacationId) AS countFollows,
                    GROUP_CONCAT(F.userId) as followers
                    From bookingVacations AS
                    B LEFT JOIN bookingFollows AS F
                    ON B.vacationId = F.vacationId
                    GROUP BY B.vacationId
                    ORDER BY Count(F.userId) DESC`;

    const vacations = await dal.executeAsync(sql);
    return vacations;
}

//get one vacation by VacationId; self use not exporting.
async function getOneVacationAsync(vacationId) {
    const sql = `SELECT B.vacationId,B.destination,B.description,
                    B.fromDate,B.toDate,B.price,B.imageFileName,
                    Count(F.vacationId) AS countFollows,
                    GROUP_CONCAT(F.userId) as followers
                    From bookingVacations AS B
                    LEFT JOIN bookingFollows AS F
                    ON B.vacationId = F.vacationId
                    WHERE B.vacationId = ?
                    GROUP BY B.vacationId`;
    const vacation = await dal.executeAsync(sql, [vacationId]);
    return vacation[0];
}

//Add new vacation
async function addNewVacationAsync(vacation, image) {
    //Check image extension
    const regex = /\.(gif|jpg|jpeg|tiff|png|ico|xbm|tif|svgz|jif|svg|jfif|webp|bmp|pjpeg|avif)$/i;

    if (image && !path.extname(image.name).match(regex) || !image) return null;

    // Save image to the disk: 
    const extension = path.extname(image.name);
    const newFileName = uuid.v4() + extension;
    await image.mv("upload/images/" + newFileName);

    const sql = `INSERT INTO bookingVacations VALUES(DEFAULT,?,?,?,?,?,?) `;
    const info = await dal.executeAsync(sql,
        [vacation.destination, vacation.description, vacation.fromDate,
        vacation.toDate, vacation.price, newFileName]);

    vacation.vacationId = info.insertId;
    vacation.imageFileName = newFileName;
    return vacation;
}

// Update full vacation and replace the image: 
async function updateFullVacationAsync(vacation, image) {

    //Check image extension
    const regex = /\.(gif|jpg|jpeg|tiff|png|ico|xbm|tif|svgz|jif|svg|jfif|webp|bmp|pjpeg|avif)$/i;
    if (image) {
        if (!path.extname(image.name).match(regex)) return 400;
        const absolutePath = path.join(__dirname, "..", "upload/images", vacation.imageFileName);
        if (await fs.existsSync(absolutePath)) {
            await fs.unlinkSync(absolutePath);
            const extension = path.extname(image.name);
            vacation.imageFileName = uuid.v4() + extension;
            await image.mv("upload/images/" + vacation.imageFileName);
        }
    }

    const sql = `UPDATE bookingVacations SET destination = ?,
                    description = ?, fromDate = ?,
                    toDate = ?,imageFileName = ?, price = ? WHERE vacationId = ?`;

    const info = await dal.executeAsync(sql,
        [vacation.destination, vacation.description, vacation.fromDate,
        vacation.toDate, vacation.imageFileName, vacation.price, vacation.vacationId]);

    vacation = await getOneVacationAsync(vacation.vacationId);
    return !info.affectedRows ? 404 : vacation;
}

//Delete vacation from DB and delete the image.
async function deleteVacationAsync(vacationId) {
    const imageSql = `SELECT imageFileName FROM bookingVacations WHERE vacationId = ?`;
    const response = await dal.executeAsync(imageSql, [vacationId]);
    let absolutePath;
    if (response[0].imageFileName)
        absolutePath = path.join(__dirname, "..", "upload/images", response[0].imageFileName);
    if (await fs.existsSync(absolutePath)) await fs.unlinkSync(absolutePath);
    const deleteVacationFromDBSql = `DELETE FROM bookingVacations WHERE vacationId = ?`;
    await dal.executeAsync(deleteVacationFromDBSql, [vacationId]);
}

//Follow methods
async function newFollowAsync(follow) {
    const sql = `INSERT INTO bookingFollows VALUES(?,?) `;
    await dal.executeAsync(sql, [follow.userId, follow.vacationId]);
    const updatedVacation = await getOneVacationAsync(follow.vacationId);
    return updatedVacation;
}

async function deleteFollowAsync(userId, vacationId) {
    const sql = `DELETE FROM bookingFollows WHERE userId = ? AND vacationId = ? `;
    await dal.executeAsync(sql, [userId, vacationId]);
    const updatedVacation = await getOneVacationAsync(vacationId);
    return updatedVacation;
}


module.exports = {
    getAllVacationsAsync,
    addNewVacationAsync,
    updateFullVacationAsync,
    deleteVacationAsync,
    newFollowAsync,
    deleteFollowAsync
}