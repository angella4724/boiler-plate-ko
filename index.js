const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://angella4724:Shin031201!@practicenodejs.cycieer.mongodb.net/?retryWrites=true&w=majority&appName=practiceNodeJS',{
    useNewIrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!~안녕하세요~')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})