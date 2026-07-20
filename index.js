import express from "express";
const router = express.Router()
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server running");
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/users", (req, res) => {
  res.send([]);
});


