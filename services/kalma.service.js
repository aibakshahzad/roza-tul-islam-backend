const Kalma = require("../models/kalma.model");

exports.findAll = async (query) => {
  return await Kalma.find(query);
};

exports.findOne = async (query) => {
  return await Kalma.findOne(query);
};

exports.create = async (data) => {
  let kalma = new Kalma(data);
  return await kalma.save();
};

exports.update = async (query, kalma) => {
  return await Kalma.findByIdAndUpdate(query, exam, { new: true });
};

exports.delete = async (query) => {
  return await Kalma.findByIdAndDelete(query);
};
