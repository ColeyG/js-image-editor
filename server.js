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

app.post("/upload", upload.single("file_name"), (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const tempPath = req.file.path;
  const targetPath = path.join(__dirname, "./uploads/image.png");

  if (path.extname(req.file.originalname).toLowerCase() === ".png") {
    fs.rename(tempPath, targetPath, err => {
      //   if (err) return handleError(err, res);

      res
        .status(200)
        .contentType("text/plain")
        .end("File uploaded!");
    });
  }
});
