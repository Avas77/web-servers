const path = require("path");
const express = require("express");

const app = express();
app.set("view engine", "hbs");
const publicDirName = path.join(__dirname, "../public");

app.get("/", (req, res) => {
  res.render("index", {
    title: "TODO app",
    name: "Avas Bajracharya",
  });
});
app.use(express.static(publicDirName));

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
