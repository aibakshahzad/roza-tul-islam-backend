const QuranService = require("../services/quran.service");
const quran = require('quran');

exports.getAllSurah = async (req, res) => {
  quran.chapter(function(err, surahs) {
    if (!err) {
      res.status(200).json({ surahs });
    }
  });
};
  
exports.getAllVerseBySurah = async (req, res) => {
  quran.select({ chapter: req.params.id}, {language: ['ur', 'en']}, function(err,verses) {
    if (!err) {
      res.status(200).json({ verses });
    }
  }); 
};
  