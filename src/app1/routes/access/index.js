const express = require("express");
const router = express.Router();
const accessController = require("../../controllers/access.controllers");
const { asyncHandle } = require("../../../helpers.js/asyncHander.js");

router.get("/firstpage", asyncHandle(accessController.firstpage) );
module.exports = router;
