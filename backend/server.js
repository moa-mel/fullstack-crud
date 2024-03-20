const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const roomRoute = require('./routes/roomRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
dotenv.config()

const PORT = process.env.PORT || 8080
const MONGO_URI = process.env.MONGO_URI


var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}

app.use(express.json())
app.use(cors(corsOptions))

//middleware
app.use('/api/rooms', roomRoute)
app.use(errorMiddleware)

//routes
app.get('/', (req, res)=>{
    res.send('Hello node')
})



mongoose.connect(MONGO_URI)
.then(()=>{
    console.log('connected to mongodb')
    app.listen(PORT, ()=>{
        console.log(`Node API app is running on port ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})




