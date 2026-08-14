const express = require("express");
const app = express();

const user = [{
  "name": "Shivam",
  "age": 25,
},
{
  "name": "Satyam",
  "age": 30,  
}]
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Shivam⭐!");
});

app.post('/user', (req, res) => {
  console.log(req.body);
  user.push(req.body);
  res.send({
    message: "User added successfully",
    "newUser": req.body
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});