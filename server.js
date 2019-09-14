const http = require("http");
const path = require("path");
const fs = require("fs");
const express = require("express");
const multer = require("multer");

const app = express();
const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3000;

httpServer.listen(3000, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const upload = multer({
  dest: "./upload/",
});

const randomTag = length => {
  let result = "";
  let characters = "abcdefghjklmnpqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

app.post("/upload", upload.single("file_name"), (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const tempPath = req.file.path;
  const randomId = randomTag(5);
  const newPath = req.file.originalname.replace(".", "-" + randomId + ".");
  newPath.replace(":", "");
  const targetPath = "./upload/" + newPath;

  fs.rename(tempPath, targetPath, err => {
    let message = "file-success";
    if (err) {
      message = err.toString();
    }
    res
      .status(200)
      .contentType("text/plain")
      .end(message + ":" + newPath);
  });
});
