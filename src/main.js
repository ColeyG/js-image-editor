import "../styles/meyer.css";
import "../styles/main.scss";

let fileInput = document.querySelector("#file");
let image = document.querySelector(".image");

const changeImage = file => {
  console.log(file.path);
};

fileInput.addEventListener("change", changeImage, false);
