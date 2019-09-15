import "../styles/meyer.css";
import "../styles/main.scss";
import ColdAjax from "./coldAjax.js";

let fileInput = document.querySelector("#file"),
  fileInputLabel = document.querySelector(".file-input-label"),
  image = document.querySelector(".image"),
  imageIsInit = false,
  modifierButtons = document.querySelectorAll(".modifier"),
  appliedModifiers = [];

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
      case "invert":
        cssFilter(modifier, "invert(100%)");
        break;
      case "grayscale":
        cssFilter(modifier, "grayscale(100%)");
        break;
      case "hue":
        cssFilter(modifier, "hue-rotate(90deg)");
        break;
      case "contrast":
        cssFilter(modifier, "contrast(200%)");
        break;
    }
  }
};

const cssFilter = (modifier, filter) => {
  if (appliedModifiers.includes(modifier)) {
    image.style.filter = image.style.filter.replace(filter, "");
    appliedModifiers = appliedModifiers.filter(appliedModifier => appliedModifier !== modifier);
  } else {
    image.style.filter += filter;
    appliedModifiers.push(modifier);
  }
  console.log(modifier);
};

fileInput.addEventListener("change", changeImage, false);
modifierButtons.forEach(element => {
  element.addEventListener("click", imageModifers, false);
});
