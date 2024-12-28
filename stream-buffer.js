const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');

// creating a server using row node js
const server = http.createServer()

server.on('request', (req, res) => {
    if(req.url ==="readfile" && req.method === "GET");
        const readableString = fs.createReadStream('./Text/stream.txt')
    
        readableString.on('data', (buffer)=>{
            res.write(buffer);
        })
        readableString.on('end', ()=>{
            res.end('Hello World!')
        })
})

server.listen(5300, ()=>{
    console.log(`Server is running on port 5300`)
})