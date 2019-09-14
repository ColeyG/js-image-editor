import "../styles/meyer.css";
import "../styles/main.scss";
import ColdAjax from "./coldAjax.js";

let fileInput = document.querySelector("#file"),
  fileInputLabel = document.querySelector(".file-input-label"),
  editButtons = document.querySelector(".edit-buttons"),
  image = document.querySelector(".image"),
  imageIsInit = false,
  modifierButtons = document.querySelectorAll(".modifier");

const changeImage = () => {
  var data = new FormData();
  data.append("file_name", fileInput.files[0]);

  ColdAjax.req("POST", "http://localhost:3000/upload", response, data);
};

const response = data => {
  let newImage = data.split(":")[1];

  image.src = "upload/" + newImage;
  image.style.display = "block";
  fileInput.style.display = "none";
  fileInputLabel.style.display = "none";
  imageIsInit = true;
};

const imageModifers = () => {
  if (imageIsInit) {
    let modifier = event.target.innerHTML.toLowerCase();
    switch (modifier) {
      case "skew":
        console.log(modifier);
        break;
    }
  }
};

fileInput.addEventListener("change", changeImage, false);
modifierButtons.forEach(element => {
  element.addEventListener("click", imageModifers, false);
});
