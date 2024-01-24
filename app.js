const epress = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});
app.get("/about", (req, res) => {
  res.status(200).send("About PAge");
});
app.use("/", (req, res, next) => {
  res.status(404).send("PAge not found");
});

app.listen(port, () => {
  console.log(`server is staring on port:${port}`);
});
