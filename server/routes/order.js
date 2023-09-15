const router = require("express").Router();
const Order = require("../models/Order");


//create a order
router.post("/",async (req,res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }catch (err){
        res.status(500).json(err);
    }
});

//update a order
router.put("/:id", async(req,res) =>{
    try{
        const order = await Order.findById(req.params.id);
        if(order.userId === req.body.userId){
            await order.updateOne({$set:req.body});
            res.status(200).json("the order is updated");
        }else{
            res.status(403).json("you can update only your order");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//delete a order
router.delete("/:id", async(req,res) =>{
    try{

        const order = await Order.findById(req.params.id);
        if(order.userId === req.body.userId){
            await order.deleteOne();
            res.status(200).json("the order is deleted");
        }else{
            res.status(403).json("you can delete only your order");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//get all order

router.get("/",async(req,res)=>{
    try{
        
        const allOrder = await Cart.find();
        res.status(200).json(allOrder);

    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;