const Beat = require("../models/Beat");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newBeat = new Beat(req.body);

  try {
    const savedBeat = await newBeat.save();
    res.status(200).json(savedBeat);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedBeat = await Beat.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedBeat);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Beat.findByIdAndDelete(req.params.id);
    res.status(200).json("Beat has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Beat
router.get("/find/:id", async (req, res) => {
  try {
    const Beat = await Beat.findById(req.params.id);
    res.status(200).json(Beat);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Beat
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let beats;

    if (qNew) {
      beats = await Beat.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      beats = await Beat.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      beats = await Beat.find();
    }

    res.status(200).json(beats);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


/* const router = require("express").Router();
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

router.get("/",async(req,res)=>{
    try{
        
        const allBeats = await Beat.find();
        res.status(200).json(allBeats);

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router; */