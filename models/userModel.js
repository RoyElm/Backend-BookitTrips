const Joi = require("joi");
//Validate data of user
class UserModel {

    constructor(existingUsers) {
        this.userId = existingUsers.userId;
        this.firstName = existingUsers.firstName;
        this.lastName = existingUsers.lastName;
        this.username = existingUsers.username;
        this.password = existingUsers.password;
        this.isAdmin = existingUsers.isAdmin;
    };

    static #registerValidateSchema = Joi.object({
        userId: Joi.number().optional(),
        firstName: Joi.string().required().min(2).max(30),
        lastName: Joi.string().required().min(2).max(30),
        username: Joi.string().required().min(2).max(30),
        password: Joi.string().required().min(6).max(5000),
        isAdmin: Joi.number().optional()
    });

    static #loginValidateSchema = Joi.object({
        userId: Joi.number().optional(),
        firstName: Joi.string().optional().min(2).max(30),
        lastName: Joi.string().optional().min(2).max(30),
        username: Joi.string().required().min(2).max(30),
        password: Joi.string().required().min(6).max(5000),
        isAdmin: Joi.number().optional()
    });

    validateRegister() {
        const result = UserModel.#registerValidateSchema.validate(this, { abortEarly: false });
        return result.error ? result.error.message : null;
    }

    validateLogin() {
        const result = UserModel.#loginValidateSchema.validate(this, { abortEarly: false });
        return result.error ? result.error.message : null;
    }

}
module.exports = UserModel;