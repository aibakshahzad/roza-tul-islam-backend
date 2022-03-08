


exports.findVerseBySurah = async (id) => {
  //return all surah
  return []
};
exports.findVerseByPara = async (para) => {
  quran.select({ chapter: para}, { language: ['ur', 'en']}, function(err,verses) {
    if (!err) {
      return verses;
    }
  }); 
};