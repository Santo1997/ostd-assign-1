document.getElementById("calculate").addEventListener("click", function () {
  let shwResult = document.getElementById("result");
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operation = document.getElementById("operation").value;

  if (isNaN(num1) || isNaN(num2)) {
    shwResult.innerText = "Please enter valid numbers";
    shwResult.classList.add("text-danger");
    shwResult.classList.remove("text-success");
    return;
  }

  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        shwResult.innerText = "Cannot divide by zero";
        shwResult.classList.add("text-danger");
        shwResult.classList.remove("text-success");
        return;
      }
      result = num1 / num2;
      break;
    default:
      shwResult.innerText = "Invalid operation";
      return;
  }

  shwResult.innerText = result;
  shwResult.classList.add("text-success");
  shwResult.classList.remove("text-danger");
});
