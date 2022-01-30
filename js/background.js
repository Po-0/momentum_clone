const images = [
    "0.png",
    "1.png"
];

const chsoenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src=`img/${chsoenImage}`;

document.body.appendChild(bgImage);