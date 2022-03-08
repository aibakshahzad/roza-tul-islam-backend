const router = require("express").Router();
const AdhanController = require("../controllers/quran.controller");
const { handleError } = require("../middlewares/handleError");

router.get("/timings", handleError(AdhanController.getAllSurah)); 

module.exports = router;