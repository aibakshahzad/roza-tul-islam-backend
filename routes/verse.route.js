const router = require("express").Router();
const verseModel = require("../models/verse.model");
const Verse = require("../models/verse.model");
const quran = require('quran');


const saveAyats = async (mapped) => {
    for await ( const v of mapped ){
        let vv = new Verse(v);
        await vv.save();
      }
}
router.post("/:id", async (req, res) => {

    for (let i= 1 ;i<=114;i++){
        quran.select({ chapter: i}, {language: ['ur', 'en']}, function(err,verses) {
            if (!err) {
             
              const mapped = verses.map( v => {
                  return {
                      ar: v.ar,
                      ur: v.ur,
                      en: v.en
                  }
              })
              console.log("mapped ", mapped)
              versesOuter = mapped
              saveAyats(mapped)
            }
          }); 
    
    }
    
      res.send("Success")
    
}); 

router.get("/", async (req, res) => {
    const verses = await Verse.find();
    console.log("Verses length", verses.length)
    res.json(verses)
})


module.exports = router;