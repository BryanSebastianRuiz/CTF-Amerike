const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const validateFlag = require("./validateFlag");

exports.validateFlag = validateFlag.validateFlag;
