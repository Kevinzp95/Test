let counter = 0;
let mark = 0;

const radioInp = document.querySelectorAll('input[type="radio"]');
const checkBoxInp = document.querySelectorAll('input[type="checkbox"]');
const sendBtn = document.querySelector("#sendBtn");
const testNumber = document.querySelectorAll(".test-number");
const result = document.querySelector("#result");

//Array.from(testNumber);
testNumber.forEach((el) => {
  el.innerText = ++counter + ". ";
});

sendBtn.addEventListener("click", sendMark);

function sendMark(el) {
  el.preventDefault();
  radioInp.forEach((el) => {
    if (el.value == "true" && el.checked) {
      el.parentElement.classList.add("bgGreen");
      mark += 1;
    } else if (el.value == "on" && el.checked) {
      el.parentElement.classList.add("bgRed");
    }
  });
  checkBoxInp.forEach((el) => {
    if (el.value == "true" && el.checked) {
      mark += 0.5;
    }
  });
  result.innerText += " " + mark;
  this.remove()
}
