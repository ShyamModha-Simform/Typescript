var _a, _b;
import buttons_attributes from "./button_attributes.js";
let toggleButtonNamedSecond = false;
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
(_a = document
    .getElementById("angle_value_toggle")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
    angleInDegree = !angleInDegree;
    e.target.innerText = !angleInDegree ? "RAD" : "DEG";
    // console.log(angleInDegree);
    buttons_attributes.forEach((ele) => {
        if (ele.angle) {
            !angleInDegree
                ? (ele.formula = `Math.${ele.symbol}`)
                : (ele.formula = `Math.${ele.symbol}(Math.PI/180)*`);
        }
    });
});
(_b = document.getElementById("function_toggle")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (e) => {
    toggleButtonNamedSecond = !toggleButtonNamedSecond;
    e.target.innerHTML = toggleButtonNamedSecond
        ? "1<sup>nd</sup>"
        : "2<sup>nd</sup>";
});
displayBox.addEventListener("keydown", function (e) {
    //checks whether the pressed key is "Enter"
    if (e.key === "Enter") {
        displayExpression = displayBox.value;
        displayExpression = calculateAnswer(displayExpression);
        displayBox.value = displayExpression;
    }
});
// Mapping over button_attributes array-------------------------------------
buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        let matched_button = buttons_attributes.find((ele) => {
            if (ele.name === e.target.id)
                return btn;
        });
        if (matched_button === undefined)
            return;
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
// Calculation function--------------------------
function calculateAnswer(expr) {
    var _a;
    try {
        const exprBuffer = generateEvaluationArray(expr.split(" "));
        const ans = (_a = eval(exprBuffer)) !== null && _a !== void 0 ? _a : "";
        return ans;
    }
    catch (e) {
        alert("Invalid Input....");
        return "Wrong Input!";
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
                    console.log(btn.formula);
                    arr.splice(i, 1, btn.formula);
                    console.log("In do while loop");
                } while (arr.includes(btn.symbol.trim()));
            }
            else {
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
    console.log(displayExpression);
    let fact_answer = displayExpression.split(" ");
    displayExpression += btn_Obj.symbol;
    let number = fact_answer[fact_answer.length - 1];
    if (number < "0") {
        console.log("Error! Factorial for negative number does not exist.");
    }
    else if (number === "0") {
        fact = 0;
    }
    else {
        for (let i = 1; i <= +number; i++) {
            fact *= i;
        }
    }
    displayExpression = displayExpression.replace(`${number}${btn_Obj.symbol}`, String(fact));
    displayBox.value = displayExpression;
}
// Helper function for Backspace buttons
function backspace(btn_Obj) {
    if (btn_Obj.name === "clearAll") {
        displayExpression = "";
    }
    else if (btn_Obj.name === "clearOne") {
        displayExpression = displayExpression.substring(0, displayExpression.length - 1);
        console.log(displayExpression);
    }
    displayBox.value = displayExpression;
}
// Helper for Storing lastly calculated values
function storingFeatures(ele) {
    var _a, _b, _c, _d, _e, _f;
    let tempBuffer;
    switch (ele.name) {
        case "MS": //memory start
            localStorage.setItem("latestAnswer", displayBox.value);
            (_a = document.getElementById("MC")) === null || _a === void 0 ? void 0 : _a.classList.remove("grey_font");
            (_b = document.getElementById("MR")) === null || _b === void 0 ? void 0 : _b.classList.remove("grey_font");
            (_c = document.getElementById("MS")) === null || _c === void 0 ? void 0 : _c.classList.add("grey_font");
            break;
        case "MR": //memory recall
            displayExpression += localStorage.getItem("latestAnswer");
            displayBox.value = displayExpression;
            break;
        case "M+":
            tempBuffer = localStorage.getItem("latestAnswer");
            displayExpression = String(Number(tempBuffer) + Number(displayExpression));
            localStorage.setItem("latestAnswer", displayExpression);
            break;
        case "M-":
            tempBuffer = localStorage.getItem("latestAnswer");
            displayExpression = String(Number(tempBuffer) - Number(displayExpression));
            localStorage.setItem("latestAnswer", displayExpression);
            break;
        case "MC": //memory clear
            localStorage.removeItem("latestAnswer");
            (_d = document.getElementById("MC")) === null || _d === void 0 ? void 0 : _d.classList.add("grey_font");
            (_e = document.getElementById("MR")) === null || _e === void 0 ? void 0 : _e.classList.add("grey_font");
            (_f = document.getElementById("MS")) === null || _f === void 0 ? void 0 : _f.classList.remove("grey_font");
            break;
    }
}
