const calculatorcontainer = document.getElementById("calculator-container");
const displayarea = document.getElementById("display-area");

calculatorcontainer.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    switch (e.target.textContent) {
      case "C":
        clear();
        break;
      case "Del":
        deleteOneValue();
        break;
      case "=":
        evaluate();
        break;
      default:
        addToDisplayArea(e.target.textContent);
    }
  }
});

function clear() {
  displayarea.textContent = "";
}

function addToDisplayArea(value) {
  displayarea.textContent += value;
}

function deleteOneValue() {
  const currentValue = displayarea.textContent;
  displayarea.textContent = currentValue.slice(0, -1);
}

function evaluate() {
  try {
 
    const result = math.evaluate(displayarea.textContent);
    displayarea.textContent = result;
  } catch (error) {
    displayarea.textContent = "Invalid operation";
  }
}
