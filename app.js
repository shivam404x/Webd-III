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

// console.log(package);  

const students = [
  { id: 1, name: "Shivam", age: 20 },
  { id: 2, name: "Piryanshu", age: 20 },
  { id: 3, name: "Satyam", age: 20 }
];

const http = require('http');
require('dotenv').config();

const process = require('process');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

  if (req.method === 'GET' && req.url === '/api/students') {

    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(
      JSON.stringify({
        count: students.length,
        students
      })
    );

  } else if (req.method === 'GET' && req.url === '/api/students/count') {

    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(
      JSON.stringify({
        count: students.length
      })
    );

  } else {

    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(
      JSON.stringify({
        error: "Route not found"
      })
    );
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

