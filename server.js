
import express from 'express'
import { readdirSync } from 'fs'
import cors from "cors"
const morgan = require("morgan")
const mongoose = require('mongoose');
// Create a Redis client


require("dotenv").config()



 const app = express()
    
 app.use(cors());
// Replace <connection-string> with your actual MongoDB connection string
const connectionString = 'mongodb+srv://ftl:12345@cluster0.ntdokai.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err.message);
});


    app.use(cors())
    app.use(express.json())
    app.use(morgan("dev"))
    
    readdirSync("./routes").map((r)=>
        app.use("/api",require(`./routes/${r}`))
    )

    const port = process.env.PORT || 8000
    app.listen(port, console.log(`port running on ${port}`)) 
