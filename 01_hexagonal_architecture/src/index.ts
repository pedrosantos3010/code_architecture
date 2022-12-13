import express from "express";

const PORT = 3000;
const HOST = "0.0.0.0";

const app = express();

app.get("/", async (req, res) => {
  res.send({ message: "Hello World" });
});

app.listen(PORT, HOST, () => console.log("Server is running!"));
