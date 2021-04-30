import express from "express";
const app = express();

let PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Up and running with graphql course");
});

app.listen(PORT, () => console.log(`App running in http://localhost:${PORT}`));
