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
