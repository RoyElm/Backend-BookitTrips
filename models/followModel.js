const Joi = require("joi");
//Validate data of follow vacation
class FollowsModel {

    constructor(existingFollowsVacation) {
        this.userId = existingFollowsVacation.userId;
        this.vacationId = existingFollowsVacation.vacationId;
    };

    static #postValidateSchema = Joi.object({
        userId: Joi.number().required().integer(),
        vacationId: Joi.number().required().integer(),
    });

    validatePost() {
        const result = FollowsModel.#postValidateSchema.validate(this, { abortEarly: false });
        return result.error ? result.error.message : null;
    }
}
module.exports = FollowsModel;