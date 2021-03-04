const express = require("express");
const bookingLogic = require("../business-logic-layer/booking-logic");
const verifyLoggedIn = require("../middleware/verify-logged-in");
const verifyAdmin = require("../middleware/verify-admin");
const errorsHelper = require("../helpers/errors-helper");
const socketHelper = require("../helpers/socket-helper");
const VacationModel = require("../models/vacationModel");
const FollowsModel = require("../models/followModel");
const path = require("path");
const router = express.Router();

// Get all vacations - all logged in user can enter:
router.get("/", verifyLoggedIn, async (request, response) => {
    try {
        const vacations = await bookingLogic.getAllVacationsAsync();
        response.json(vacations);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

// Add new vacation - only admin can enter: 
router.post("/", verifyAdmin, async (request, response) => {
    try {
        const vacation = new VacationModel(request.body);
        const error = vacation.validatePost();
        if (error) {
            response.status(400).json(error);
            return;
        }
        //Validation for image 
        const addedVacation = await bookingLogic.addNewVacationAsync(vacation, request.files ? request.files.newImage : null);
        if (!addedVacation) return response.status(400).send("Image doesn't exist or wrong file has been send");
        response.status(201).json(addedVacation);
        socketHelper.vacationAdded(addedVacation)
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

// Edit vacation - only admin can enter: 
router.put("/:vacationId", verifyAdmin, async (request, response) => {
    try {
        const vacation = new VacationModel(request.body);
        const error = vacation.validatePut();
        if (error) {
            response.status(400).json(error);
            return;
        }
        vacation.vacationId = +request.params.vacationId;
        const editedVacation = await bookingLogic.updateFullVacationAsync(vacation, request.files ? request.files.newImage : null);
        if (editedVacation === 404) return response.status(404).send("Vacation Doesn't Exist");
        if (editedVacation === 400) return response.status(404).send("Wrong file has been send");
        response.json(editedVacation);
        socketHelper.vacationUpdated(editedVacation)
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});


// Delete vacation - only admin can enter: 
router.delete("/:vacationId", verifyAdmin, async (request, response) => {
    try {
        const { vacationId } = request.params;
        await bookingLogic.deleteVacationAsync(vacationId);
        response.sendStatus(204);
        socketHelper.vacationDeleted(vacationId)

    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

// Send the image:
router.get("/images/:imageName", (request, response) => {
    const { imageName } = request.params;
    const absolutePath = path.join(__dirname, "..", "upload/images", imageName);
    response.sendFile(absolutePath);
});

// Add new Follow - all logged in user can enter: 
router.post("/follow", verifyLoggedIn, async (request, response) => {
    try {
        const follow = new FollowsModel(request.body);
        const error = follow.validatePost();
        if (error) {
            response.status(404).json(error);
            return;
        }

        const updatedVacation = await bookingLogic.newFollowAsync(follow);
        response.status(201).json(updatedVacation);
        socketHelper.vacationUpdated(updatedVacation)

    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

// un Follow - all logged in user can enter: 
router.delete("/unFollow/:userId/:vacationId", verifyLoggedIn, async (request, response) => {
    try {
        const { userId, vacationId } = request.params;
        const updatedVacation = await bookingLogic.deleteFollowAsync(userId, vacationId);
        response.status(201).json(updatedVacation);
        socketHelper.vacationUpdated(updatedVacation)
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

module.exports = router;