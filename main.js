const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber);
let attempts = 1

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleResetWithEnterButton)

function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber")

  if (inputNumber.value < 0 || inputNumber.value > 10) {
    alert("Aceita somente números de 0 a 10")
  }

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Você acertou em ${attempts} tentativas`
  }

  if(inputNumber.value) {
    attempts++
  }

  inputNumber.value = ""
}

function handleResetClick() {
  toggleScreen()
  attempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleResetWithEnterButton(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}


