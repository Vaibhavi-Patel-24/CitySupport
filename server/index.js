import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';

import router from './routes/routes.js';
import connection from "./database/db.js"
import fileUpload from 'express-fileupload';

dotenv.config()

const app = express()
app.use(fileUpload({
    useTempFiles:true
}))
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ extended:true}))
app.use(bodyParser.urlencoded({ extended:true}))
app.use('/',router);
const PORT = 8000


app.listen(PORT , ()=>{console.log(`server running successfully on port ${PORT}`)})

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

connection(USERNAME,PASSWORD);
