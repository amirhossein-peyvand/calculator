const main = document.querySelector(".main");
const slider = document.querySelector(".slider");
const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

slider.style.justifyContent = "flex-start";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.textContent) {
      case "0":
        screen.textContent += "0";
        break;
      case "1":
        screen.textContent += "1";
        break;
      case "2":
        screen.textContent += "2";
        break;
      case "3":
        screen.textContent += "3";
        break;
      case "4":
        screen.textContent += "4";
        break;
      case "5":
        screen.textContent += "5";
        break;
      case "6":
        screen.textContent += "6";
        break;
      case "7":
        screen.textContent += "7";
        break;
      case "8":
        screen.textContent += "8";
        break;
      case "9":
        screen.textContent += "9";
        break;
      case ".":
        if (!screen.textContent.includes(".")) screen.textContent += ".";
        break;
      case "+":
        if (!screen.textContent.includes("+")) screen.textContent += "+";
        break;
      case "-":
        if (!screen.textContent.includes("-")) screen.textContent += "-";
        break;
      case "*":
        if (!screen.textContent.includes("*")) screen.textContent += "*";
        break;
      case "/":
        if (!screen.textContent.includes("/")) screen.textContent += "/";
        break;
      case "RESET":
        screen.textContent = "";
        break;
      case "DEL":
        let value = screen.textContent;
        value = value.split("");
        value.pop();
        screen.textContent = value.join("");
        break;
      case "=":
        showResult();
        break;
    }
  });
});

const showResult = () => {
  let expression = eval(screen.textContent);
  console.log(expression == true);
  screen.textContent = Number(expression).toFixed(1);
};

slider.addEventListener("click", () => {
  if (slider.style.justifyContent === "flex-start") {
    slider.style.justifyContent = "center";
    main.classList.add("theme-2");
  } else if (slider.style.justifyContent === "center") {
    slider.style.justifyContent = "flex-end";
    main.classList.remove("theme-2");
    main.classList.add("theme-3");
  } else {
    slider.style.justifyContent = "flex-start";
    main.classList.remove("theme-3");
    main.classList.add("theme-1");
  }
});
