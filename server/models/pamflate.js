import mongoose from "mongoose";

const pamflate = new mongoose.Schema({
    imageURL:{
        type:String,
        required:true
    },
    altText:{
        type:String,
        required:true
    },
});

const Pamflate = mongoose.model('Pamflate',pamflate)

export default Pamflate;