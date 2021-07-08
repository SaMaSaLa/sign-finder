let num;

const inputEl = document.getElementById("input");
const nanEl = document.getElementById("nan");
const ianEl = document.getElementById("ian");
const posEl = document.getElementById("pos");
const negEl = document.getElementById("neg");
const zeroEl = document.getElementById("zero");

const numEl = document.getElementById("number");

if (numEl === "") {
  inputEl.style.backgroundColor = "rgba(255, 53, 22, 0.5)";
}

numEl.addEventListener("click", () => {
  inputEl.style.backgroundColor = "rgba(255, 53, 22, 0.5)";
});

numEl.addEventListener("keyup", () => {
  nanEl.style.backgroundColor = "rgba(255, 53, 22, 0.5)";
});
