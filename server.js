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
  dest: ".",
});

app.post("/upload", upload.single("image" /* name attribute of <file> element in your form */), (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res
    .status(200)
    .contentType("text/plain")
    .end("Responsizzle");
});
