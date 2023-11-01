const messageElement = document.getElementById("message");
const buttonElement = document.getElementById("btn");

let isHello = true;

buttonElement.addEventListener("click", () => {
  if (isHello) {
    messageElement.textContent = "Hola DevOps";
    messageElement.style.backgroundColor = "yellow";
  } else {
    messageElement.textContent = "Adiós DevOps";
    messageElement.style.backgroundColor = "blue";
  }
  isHello = !isHello;
});