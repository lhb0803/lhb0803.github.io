const imgBox = document.querySelector("#img-box");

const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg"
];
const imageLength = images.length;

const chosenImage = images[Math.floor(Math.random() * imageLength)];

const bgImage = imgBox.querySelector("img");
bgImage.src = `src/img/${chosenImage}`;

// add the element to the imgBox
imgBox.appendChild(bgImage);