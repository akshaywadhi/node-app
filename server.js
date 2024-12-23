require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./Router/userRouter')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/users', router.router)
app.use(express.static(path.resolve(__dirname , 'public', 'build')))



// try{
//   mongoose.connect(process.env.MONGO_URL)
//   console.log('Connected To Database')
 
// }
// catch(err){
//   console.log(err)
// }



app.listen(process.env.PORT, (req,res) => {
  console.log('Server Is Running On Port 3001')
})