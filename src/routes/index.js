const express = require("express");
const router = express.Router();

router.use("/v1/api/app1", require("../app1/routes"));
// router.use("/v1/api/app2", require("./app2/routes"));
module.exports = router;