import "../styles/meyer.css";
import "../styles/main.scss";
import ColdAjax from "./coldAjax.js";

let fileInput = document.querySelector("#file");
let image = document.querySelector(".image");

const changeImage = () => {
  var data = new FormData();
  data.append("file_name", fileInput.files[0]);

  ColdAjax.req("POST", "http://localhost:3000/upload", response, data);
};

const response = data => {
  let newImage = data.split(":")[1];

  image.src = "upload/" + newImage;
};

fileInput.addEventListener("change", changeImage, false);
