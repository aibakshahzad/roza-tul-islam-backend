const AdhanService = require("../services/adhan.service");

exports.getAdhanTimings = async (req, res) => {

  const { coordinates } = req.body;

  if(!coordinates) return res.status(400).send("Coordinates not found");

  const adhanTimings = await AdhanService.findAll(coordinates);
  res.status(200).json({ adhanTimings });
};
  