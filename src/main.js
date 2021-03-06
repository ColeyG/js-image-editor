import '../styles/meyer.css';
import '../styles/main.scss';

const remote = 'http://155.138.147.77';
const server = `${remote}:3000/`;
const resp = `${remote}/js-image-editor/`;

const fileInput = document.querySelector('#file');
const fileInputLabel = document.querySelector('.file-input-label');
const image = document.querySelector('.image');
let imageIsInit = false;
const modifierButtons = document.querySelectorAll('.modifier');
let appliedModifiers = [];

const response = (data) => {
  const newImage = data.split(':')[1];

  image.src = `${resp}upload/${newImage}`;
  image.style.display = 'block';
  fileInput.style.display = 'none';
  fileInputLabel.style.display = 'none';
  imageIsInit = true;
};

const changeImage = () => {
  const data = new FormData();
  data.append('file_name', fileInput.files[0]);

  fetch(`${server}upload`, { method: 'POST', body: data })
    .then((resp) => resp.text())
    .then((data) => {
      response(data);
    });
};

const cssTransform = (modifier, transform) => {
  if (appliedModifiers.includes(modifier)) {
    image.style.transform = image.style.transform.replace(transform, '');
    appliedModifiers = appliedModifiers.filter((appliedModifier) => appliedModifier !== modifier);
  } else {
    image.style.transform += transform;
    appliedModifiers.push(modifier);
  }
  console.log(modifier);
};

const cssFilter = (modifier, filter) => {
  if (appliedModifiers.includes(modifier)) {
    image.style.filter = image.style.filter.replace(filter, '');
    appliedModifiers = appliedModifiers.filter((appliedModifier) => appliedModifier !== modifier);
  } else {
    image.style.filter += filter;
    appliedModifiers.push(modifier);
  }
  console.log(modifier);
};

const imageModifers = (event) => {
  if (imageIsInit) {
    const modifier = event.target.innerHTML.toLowerCase();

    switch (modifier) {
      case 'invert':
        cssFilter(modifier, 'invert(100%)');
        break;
      case 'grayscale':
        cssFilter(modifier, 'grayscale(100%)');
        break;
      case 'hue':
        cssFilter(modifier, 'hue-rotate(90deg)');
        break;
      case 'contrast':
        cssFilter(modifier, 'contrast(200%)');
        break;
      case 'saturate':
        cssFilter(modifier, 'saturate(200%)');
        break;
      case 'sepia':
        cssFilter(modifier, 'sepia(100%)');
        break;
      case 'brighten':
        cssFilter(modifier, 'brightness(2)');
        break;
      case 'darken':
        cssFilter(modifier, 'brightness(0.5)');
        break;
      case 'uglify':
        cssFilter(modifier, 'brightness(2) saturate(300%) hue-rotate(45deg)');
        break;
      case 'flip x':
        cssTransform(modifier, 'scaleX(-1)');
        break;
      case 'flip y':
        cssTransform(modifier, 'scaleY(-1)');
        break;
      case 'skew left':
        cssTransform(modifier, 'skewY(-10deg)');
        break;
      case 'skew right':
        cssTransform(modifier, 'skewY(10deg)');
        break;
      default:
        console.log('No Case');
        break;
    }
  }
};

fileInput.addEventListener('change', changeImage, false);
modifierButtons.forEach((element) => {
  element.addEventListener('click', imageModifers, false);
});
