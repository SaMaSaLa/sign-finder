let num = 0;

const inputEl = document.getElementById("input");
const nanEl = document.getElementById("nan");
const posEl = document.getElementById("pos");
const negEl = document.getElementById("neg");
const zeroEl = document.getElementById("zero");

const numEl = document.getElementById("number");

if (numEl === "") {
  inputEl.style.backgroundColor = "rgba(255, 53, 22, 0.5)";
  // } else if () {
}

numEl.addEventListener("keyup", () => {
  // Remove selected class
  document.querySelectorAll(".selected").forEach((el) => {
    el.classList.remove("selected");
  });

  // Get current value
  const valStr = numEl.value;

  // Check for each item

  if (valStr === "") {
    inputEl.classList.add("selected");
  } else {
    const val = parseFloat(valStr);
    if (isNaN(val)) {
      nanEl.classList.add("selected");
    } else if (val === 0) {
      zeroEl.classList.add("selected");
    } else if (val > 0) {
      posEl.classList.add("selected");
    } else if (val < 0) {
      negEl.classList.add("selected");
    } else {
      console.error("This should never happen. Investigate");
    }
  }
});

// On first load, make sure inputEl has selected class
inputEl.classList.add("selected");
