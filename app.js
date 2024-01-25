const epress = require("express");
const userRoutes = require("./controllers/userRoutes");
const port = 8000;
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
// const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       console.log("origin", origin);
//       if (!origin) {
//         return callback(null, true);
//       }
//       if (allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       } else {
//         return callback(new Error("blocked by cors"));
//       }
//     },
//   })
// );

app.use(cors());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send({ message: "the API is working" });
});

// app.get("/", (req, res) => {
//   res.status(200).send("Hello world");
// });
// app.get("/about", (req, res) => {
//   res.status(200).send("About PAge");
// });
// app.use("/", (req, res, next) => {
//   res.status(404).send("PAge not found");
// });

app.listen(port, () => {
  console.log(`server is staring on port:${port}`);
});
