import "../styles/meyer.css";
import "../styles/main.scss";
import ColdAjax from "./coldAjax.js";

let fileInput = document.querySelector("#file");
let image = document.querySelector(".image");

const changeImage = file => {
  console.log(file.path);
};

const response = data => {
  console.log(data);
};

ColdAjax.coldAjax("POST", "http://localhost:3000/upload", response);

fileInput.addEventListener("change", changeImage, false);
