const express = require('express')
const mongoose = require('mongoose').default;
const cors =require('cors')
//Was replaced by the above
// const mongoose = require('mongoose');
require('dotenv').config()

const router = require('./Routes/Router')
const app = express()

//console.log(process.env.DB_URI)
const dbUri = process.env.DB_URI

/// connect stoped to do callback (the last parte )  , () console.logo......
// mongoose.connect('mongodb://localhost:27017/local-commerce?retryWrites=true&w=majority',{
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// }, () => console.log('Connected to database'))

mongoose.connect(dbUri,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

app.use(cors())
app.use(express.json())

app.use(router)


// app.get('/', function (req, res){
//     res.send('Hello API')
// })

app.listen(3333, () => console.log('Server running on port 3333'))


