import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connection from "./database/db.js"

dotenv.config()

const app = express()
const PORT = 8000

app.use(cors())


app.listen(PORT , ()=>{console.log(`server running successfully on port ${PORT}`)})

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

connection(USERNAME,PASSWORD);
