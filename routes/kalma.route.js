const router = require("express").Router();
const KalmaController = require("../controllers/kalma.controller");
const { handleError } = require("../middlewares/handleError");

router.get("/kalma", handleError(KalmaController.getAllKalmas)); 
router.get("/kalma:id", handleError(KalmaController.getOneKalma)); 
router.post("/kalma", handleError(KalmaController.createKalma)); 
router.put("/kalma", handleError(KalmaController.updateKalma));  
router.delete("/kalma", handleError(KalmaController.deleteKalma)); 

module.exports = router;