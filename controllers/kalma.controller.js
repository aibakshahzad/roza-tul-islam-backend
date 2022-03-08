const { validateExam, validateObjectId } = require("../helpers/validation");
const KalmaService = require("../services/kalma.service");
const _ = require('lodash');

exports.getAllKalmas = async (req, res) => {
  const kalmas = await KalmaService.findAll();
  res.status(200).json({ kalmas });
};

exports.getOneKalma = async (req, res) => {
  if (!validateObjectId(req.params._id))
    return res.status(400).json({ message: "Kalma id is not valid" });

  const kalmas = await KalmaService.findAll({ _id: req.params._id });

  if (kalmas.length === 0)
    return res.status(404).json({ message: `No Kalma found for id: ${req.params._id}` });

  res.status(200).json({ exams });
};

exports.createKalma = async (req, res) => {
  const { error } = validateExam.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  
  const addedKalma = await KalmaService.create(req.body);

  res.status(201).json({
    message: "Kalma Added Successfully",
    addedKalma,
  });
};

exports.updateKalma = async (req, res) => {

  if (!validateObjectId(req.params._id))
    return res.status(400).json({ message: "Kalma id is not valid" });

  //check if the exam exists or not
  const exam = await KalmaService.findOne({
    _id: req.params._id,
  });
  if (!exam) return res.status(403).json({ message: "Kalma dosen't exists" });

  //validate request
  const { error } = validateExam.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  //update
  const updatedKalma = await KalmaService.update(
    _.pick(req.params, ["_id"]),
    _.pick(req.body, [
      "title",
      "kalma_ar",
      "kalma_ur",
      "kalma_en",
      "audio_link",
    ])
  );

  res.status(200).json({
    message: "Kalma Updated Successfully",
    updatedKalma,
  });
};

exports.deleteKalma = async (req, res) => {

  if (!validateObjectId(req.params._id))
    return res.status(400).json({ message: "Kalma id is not valid" });

  const kalma = await KalmaService.findOne({
    _id: req.params._id,
  });
  if (!kalma) return res.status(403).json({ message: "Kalma doesn't exists" });

  const deletedKalma = await KalmaService.delete({
    _id: req.params._id,
  });

  res.status(200).json({
    message: "Kalma Deleted Successfully",
    deletedKalma,
  });
};
