const mongoose = require("mongoose");

const BeatSchema = new mongoose.Schema(
    {
        userId:{
            type:String,
            required:true,
        },
        desc:{
            type:String,
            max:500
        },
        title:{
            type:String,
            required:true,
            unique:true
        },
        img:{
            type:String,

        },
        likes:{
            type:Array,
            default:[]
        },
        price: {
            type:Number, 
            required:true
        }
    },
    {timestamps:true}
);

module.exports = mongoose.model("Beat",BeatSchema);