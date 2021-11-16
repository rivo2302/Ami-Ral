const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const userMidl = require("../middleware/auth");

router.post("/signup", userCtrl.register);
router.post("/login", userCtrl.login);
router.put("/update", userMidl.admin, userCtrl.update);
router.delete("/delete", userMidl.admin, userCtrl.delete);
//router.post("/show", userMidl.admin, userCtrl.show);
router.get("/show/:id",  userCtrl.show);

module.exports = router;
