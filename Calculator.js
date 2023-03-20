import buttons_attributes from "./button_attributes.js";

const buttons = document.querySelectorAll("button"); // Buttons array from Markup
let angleInDegree = false; // To check RAD or DEG
let displayBox = document.querySelector("input"); // Input box shown on screen
let displayExpression = displayBox.value; // To carry display value throughout file

// Additional Event Listeners-----------------------------------------------------------------

displayBox.addEventListener("input", function (e) {
  displayExpression = displayBox.value; // To support keyboard entries and Direct changes
});

displayBox.addEventListener("blur", () => {
  displayBox.focus(); // For auto focus
});

document.getElementById("angle_value_toggle").addEventListener("click", (e) => {
  angleInDegree = !angleInDegree;
  e.target.innerText = angleInDegree ? "RAD" : "DEG";
  // console.log(angleInDegree);
  buttons_attributes.forEach((ele) => {
    if (ele.angle) {
      angleInDegree
        ? (ele.formula = `Math.${ele.symbol}`)
        : (ele.formula = `Math.${ele.symbol}(Math.PI/180)*`);
    }
  });
});

displayBox.addEventListener("keydown", function (e) {
  //checks whether the pressed key is "Enter"
  if (e.key === "Enter") {
    displayExpression = displayBox.value;
    displayExpression = calculateAnswer(displayExpression);
    displayBox.value = displayExpression;
  }
});

// Mapping over button_attributes array
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let matched_button = buttons_attributes.find((ele) => {
      if (ele.name === e.target.id) return btn;
    });

    if (matched_button === undefined) return;

    // Found clicked button's attributes
    switch (matched_button.type) {
      case "calculate":
        displayExpression = displayBox.value;
        displayExpression = calculateAnswer(displayExpression);
        displayBox.value = displayExpression;
        break;

      case "factorial":
        fact(matched_button);
        break;

      case "scientific_notation":
        displayExpression = Number(displayExpression).toExponential();
        displayBox.value = displayExpression;
        break;

      case "backspace":
        backspace(matched_button);
        displayBox.value = displayExpression;
        break;

      case "storing_buttons":
        storingFeatures(matched_button);
        break;

      default:
        displayExpression += matched_button.symbol;
        displayBox.value = displayExpression;
    }
  });
});

// Calculation function

function calculateAnswer(expr) {
  try {
    const exprBuffer = generateEvaluationArray(expr.split(" "));
    const ans = eval(exprBuffer);
    return  ans ? String(ans) : '';
  } catch (e) {
    alert("Invalid Input....");
  }
}

// Helper function for converting human readable string into executable
function generateEvaluationArray(arr) {
  buttons_attributes.forEach((btn) => {
    if (arr.includes(btn.symbol.trim())) {
      // Why extra? :- To tackle repeated Math APIs inbuilt funcitons
      if (btn.type === "Math_function") {
        do {
          const i = arr.indexOf(btn.symbol.trim());
          arr.splice(i, 1, btn.formula);
          console.log("In do while loop");
        } while (arr.includes(btn.symbol.trim()));
      } else {
        const i = arr.indexOf(btn.symbol.trim());
        arr.splice(i, 1, btn.formula);
      }
    }
  });
  console.log(arr);

  return arr.join("");
}

// Helper function for Factorial
function fact(btn_Obj) {
  console.log(btn_Obj);
  let fact = 1;
  let fact_answer = displayExpression.split(" ");
  displayExpression += btn_Obj.symbol;
  let number = fact_answer[fact_answer.length - 1];
  if (number < 0) {
    console.log("Error! Factorial for negative number does not exist.");
  } else if (number === 0) {
    fact = 0;
  } else {
    for (let i = 1; i <= number; i++) {
      fact *= i;
    }
  }
  displayExpression = displayExpression.replace(
    `${number}${btn_Obj.symbol}`,
    String(fact)
  );
  displayBox.value = displayExpression;
}

// Helper function for Backspace buttons
function backspace(btn_Obj) {
  if (btn_Obj.name === "clearAll") {
    displayExpression = "";
  } else if (btn_Obj.name === "clearOne") {
    displayExpression = displayExpression.substring(
      0,
      displayExpression.length - 1
    );
    console.log(displayExpression);
  }
  displayBox.value = displayExpression;
}

// Helper for Storing lastly calculated values
function storingFeatures(ele) {
  let tempBuffer;
  switch (ele.name) {
    case "MS": //memory start
      localStorage.setItem("latestAnswer", displayBox.value);
      document.getElementById("MC").classList.remove("grey_font");
      document.getElementById("MR").classList.remove("grey_font");
      document.getElementById("MS").classList.add("grey_font");
      break;

    case "MR": //memory recall
      displayExpression += localStorage.getItem("latestAnswer");
      displayBox.value = displayExpression;

      break;
    case "M+":
      tempBuffer = localStorage.getItem("latestAnswer");
      displayExpression = Number(tempBuffer) + Number(displayExpression);
      localStorage.setItem("latestAnswer", displayExpression);

      break;
    case "M-":
      tempBuffer = localStorage.getItem("latestAnswer");
      displayExpression = Number(tempBuffer) - Number(displayExpression);
      localStorage.setItem("latestAnswer", displayExpression);
      break;
    case "MC": //memory clear
      localStorage.removeItem("latestAnswer");
      document.getElementById("MC").classList.add("grey_font");
      document.getElementById("MR").classList.add("grey_font");
      document.getElementById("MS").classList.remove("grey_font");
      break;
  }
}
