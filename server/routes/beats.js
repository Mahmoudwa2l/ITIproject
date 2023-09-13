const router = require("express").Router();
const Beat = require("../models/Beat");


//create a beat
router.post("/",async (req,res) => {
    const newBeat = new Beat(req.body);
    try {
        const savedBeat = await newBeat.save();
        res.status(200).json(savedBeat);
    }catch (err){
        res.status(500).json(err);
    }
});

//update a beat


//delete a beat

//like a beat

//get a beat

//get all beats

module.exports = router;