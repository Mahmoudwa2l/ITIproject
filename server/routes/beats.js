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
router.put("/:id", async(req,res) =>{
    try{

        const beat = await Beat.findById(req.params.id);
        if(beat.userId === req.body.userId){
            await beat.updateOne({$set:req.body});
            res.status(200).json("the beat is updated");
        }else{
            res.status(403).json("you can update only your beat");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//delete a beat
router.delete("/:id", async(req,res) =>{
    try{

        const beat = await Beat.findById(req.params.id);
        if(beat.userId === req.body.userId){
            await beat.deleteOne();
            res.status(200).json("the beat is deleted");
        }else{
            res.status(403).json("you can delete only your beat");
        }
    }catch(err){
        res.status(500).json(err);
    }
});
//like a beat
router.put("/:id/like" , async (req,res) =>{
    try{
        const beat = await Beat.findById(req.params.id);
        if(!beat.likes.includes(req.body.userId)){
            await beat.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("The beat has been liked");
        }else{
            await beat.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("The beat has been disliked");
        }
    }catch(err){
        res.status(500).json(err);
    }
})
//get a beat
router.get("/:id" , async(req,res) =>{
    try{
        const beat = await Beat.findById(req.params.id);
        res.status(200).json(beat);

    }catch(err){
        res.status(500).json(err);
    }
})


//get all beats

router.get("/all",async(req,res)=>{
    let beatArray = [];
    try{
        /* const allBeats = await Promise.all() */
        const allBeats = await Beat.find();
        res.json(allBeats);

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;