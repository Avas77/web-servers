const path = require("path");
const express = require("express");

const app = express();
const publicDirName = path.join(__dirname, "../public");

app.use(express.static(publicDirName));

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
