const dal = require("../data-access-layer/dal");
const cryptoHelper = require("../helpers/crypto-helper");
const jwtHelper = require("../helpers/jwt-helper");

async function registerAsync(user) {

    //Checking if username exist;
    const verifyUsername = `SELECT username FROM users where username = ?`;
    const existingUserSql = await dal.executeAsync(verifyUsername, [user.username]);
    if (existingUserSql[0] !== undefined) return null;

    user.password = cryptoHelper.hash(user.password);
    // Solve SQL injection:
    const sql = "INSERT INTO users VALUES(DEFAULT, ?, ?, ?, ?, DEFAULT)";
    await dal.executeAsync(sql, [ user.firstName, user.lastName,user.username, user.password]);
    delete user.password;

    // Generate JWT token to return to frontend:
    user.token = jwtHelper.getNewToken({ user });

    return user;
}

async function loginAsync(userCredential) {

    // Hash user password: 
    userCredential.password = cryptoHelper.hash(userCredential.password);

    // Solve SQL injection by sending sql + values:
    const sql = "SELECT userId, username,firstName, lastName, isAdmin FROM users WHERE username = ? AND password = ?";

    const users = await dal.executeAsync(sql, [userCredential.username, userCredential.password]);
    if (users.length === 0) return null;
    const user = users[0];

    // Generate JWT token to return to frontend:
    user.token = jwtHelper.getNewToken({ user });

    return user;
}

module.exports = {
    registerAsync,
    loginAsync
};