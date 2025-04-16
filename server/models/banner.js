import mongoose from "mongoose";

const banner = new mongoose.Schema({
    imageURL:{
        type:String,
        required:true
    },
    altText:{
        type:String,
        required:true
    },
});

const Banner = mongoose.model('Banner',banner)

export default Banner;