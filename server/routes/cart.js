const router = require("express").Router();
const Cart = require("../models/Cart");


//create a cart
router.post("/",async (req,res) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }catch (err){
        res.status(500).json(err);
    } 
});

//update a cart
router.put("/:id", async(req,res) =>{
    try{
        const cart = await Cart.findById(req.params.id);
        if(cart.userId === req.body.userId){
            await cart.updateOne({$set:req.body});
            res.status(200).json("the cart is updated");
        }else{
            res.status(403).json("you can update only your cart");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//delete a cart
router.delete("/:id", async(req,res) =>{
    try{

        const cart = await Cart.findById(req.params.id);
        if(cart.userId === req.body.userId){
            await cart.deleteOne();
            res.status(200).json("the cart is deleted");
        }else{
            res.status(403).json("you can delete only your cart");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//get a beat
router.get("/:id" , async(req,res) =>{
    try{
        const beat = await Beat.findById(req.params.id);
        res.status(200).json(beat);

    }catch(err){
        res.status(500).json(err);
    }
})


//get all Cart

router.get("/",async(req,res)=>{
    try{
        
        const allCart = await Cart.find();
        res.status(200).json(allCart);

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;