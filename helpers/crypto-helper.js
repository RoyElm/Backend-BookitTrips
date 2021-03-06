const crypto = require("crypto");

const salt = "*";

function hash(plainText) {

    return crypto.createHmac("sha512", salt).update(plainText).digest("hex");
}

module.exports = {
    hash
};