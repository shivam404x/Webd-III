// const fs = require('fs');
// const data = fs.readFileSync('notes.txt', 'utf-8');
// console.log(data);
// fs.writeFileSync('notes.txt', 'This is Shivam babu');

// const path = require('path');
// const filepath = path.join(__dirname,'test', 'hello.txt');
// console.log(filepath);

// const os = require('os');
// const user = os.userInfo();
// console.log(user);

// const des = require('./data/des');
// console.log(des);

// const package = require('./data/package');
// console.log(package);   

require('dotenv').config()
const http = require('http')
const process = require('process');
const port = process.env.PORT || 3000;
// console.log(process.env.PORT);

const server = http.createServer((req, res) => {
    ;
    res.writeHead(200, { 'content-Type': 'text/html' });
    res.write('<h1>Hello  world</h1>');
    res.write('<p>Hello  world</p>');
    res.end();
});

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
