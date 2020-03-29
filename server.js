if(process.env.NODE_ENV !== 'production'){
require('dotenv').config()
}
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout','layouts/layout')

app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
   
})
mongoose.set('useUnifiedTopology', true);
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', error => console.log('connected to mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT|| 5500)




/*
const http = require('http');
const fs = require('fs');
const port = 5500;
const host = 'localhost';


const server = http.createServer(function(req,res){
   res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('index.html',function(error,data){
        if(error){
            res.writeHead(404)
            res.write('Error: File not found')
        }
        else {
            res.write(data)
        }
        res.end()
    }) 
    }).listen(3000, host, 'localhost')

  server.listen(port,function(error){
        if (error){
            console.log('Something went wrong')
        }
        else {
            console.log('Server is listening on port ' + port)
        }
    })
*/

    