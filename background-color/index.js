const darkColorsArr = [
  //declaramos cadenas en formato hexadecimal
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

function getRandomIndex() {
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  // Multiplicar el número que genera Math.random por darkColorsArr.length (que es 10, el número de elementos en el arreglo)
  // produce un número decimal entre 0 y 9.999... y con Math.floor lo redondeamos hacia abajo 0 y 9.
  return randomIndex;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()]; // color del arreglo y lo almacena en la constante color

  bgHexCodeSpanElement.innerText = color; // establece el contenido de texto
  body.style.backgroundColor = color; // establece el color de fondo del <body>
}

const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;
