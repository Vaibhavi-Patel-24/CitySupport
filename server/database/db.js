import mongoose from "mongoose";

import dotenv from dotenv


const connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@citysupport.5pflg.mongodb.net/?retryWrites=true&w=majority&appName=CITYSUPPORT`;
    try {
        await mongoose.connect(URL);
        console.log('Main database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the main database', error);
    }
};

export default connection;


