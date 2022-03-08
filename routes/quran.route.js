const router = require("express").Router();
const QuranController = require("../controllers/quran.controller");
const { handleError } = require("../middlewares/handleError");

router.get("/surah", handleError(QuranController.getAllSurah)); 
router.get("/surah/:id", handleError(QuranController.getAllVerseBySurah));
router.get("/para", handleError(QuranController.getAllPara));
router.get("/para/:id", handleError(QuranController.getAllVerseByPara));

module.exports = router;