const express = require("express");
const router = express.Router();
const controllers = require('../controllers/controllers');

router.get("/", controllers.showMessages);
router.get("/new",controllers.newForm);
router.get("/message/:id", controllers.openMessage);
router.post("/new",controllers.addMessage)

module.exports = router