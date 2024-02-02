const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../userDataBase.json");

function readDataFromFile() {
  const data = fs.readFileSync(dataFilePath);
  return JSON.parse(data);
}
function writeDatatoFile(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}
router.get("/users", (req, res) => {
  const users = readDataFromFile();
  res.send(users);
});
router.get("/users/:id", (req, res) => {
  const users = readDataFromFile();
  const userId = req.params.id;
  const user = users.find((user) => user.id == userId);
  if (user) {
    res.send(user);
  } else {
    res.status(400).send("user not found");
  }
});
router.post("/users", (req, res) => {
  const user = req.body;
  // console.log("user", user);
  const users = readDataFromFile();
  user.id = new Date().getTime();
  users.push(user);
  res.send(users);
  writeDatatoFile(users);
});
router.get("/test", (req, res) => {
  res.send({ message: "welcome to user test api", path: dataFilePath });
});

module.exports = router;
