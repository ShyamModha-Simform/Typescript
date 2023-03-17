const buttons_attributes = [
    //  Math.Functions
    {
      name: "square", // Same as id value
      symbol: " ^2 ", // Symbol for inputing string to displayBox when onClick event occurs
      formula: "**2", // Will use to convert human readble string to the string that can be evaluated by JS eval()
      type: "number", // Button's Value 
    },
    {
      name: "scientific_notation",
      symbol: "false",
      formula: "toExponential(",
      type: "scientific_notation",
    },
  
    {
      name: "ceil",
      symbol: " ceil( ",
      formula: "Math.ceil(",
      type: "Math_function",
    },
    {
      name: "floor",
      symbol: " floor( ",
      formula: "Math.floor(",
      type: "Math_function",
    },
    {
      name: "sin",
      symbol: " sin( ",
      formula: "Math.sin(",
      type: "roundOffs",
    },
    {
      name: "cos",
      symbol: " cos( ",
      formula: "Math.cos(",
      type: "Math_function",
    },
    {
      name: "tan",
      symbol: " tan( ",
      formula: `Math.tan(`,
      type: "Math_function",
    },
  
    {
      name: "log",
      symbol: " log( ",
      formula: "Math.log10(", // [ 'Math.log(', '1', '0', ')' ].join(''); ==> "Math.log(10)"
      type: "Math_function",
    },
    {
      name: "toggleSign",
      symbol: "*(-1)",
      formula: "*(-1)",
      type: "Math_function",
    },
    {
      name: "sqrt",
      symbol: " sqrt( ",
      formula: "Math.sqrt(",
      type: "number",
    },
  
    {
      name: "exp",
      symbol: "E ",
      formula: "*10**",
      type: "Functions",
    },
    {
      name: "abs",
      symbol: " abs( ",
      formula: "Math.abs(",
      type: "Math_function",
    },
    {
      name: "1_uppon_x",
      symbol: "1/",
      formula: "1/",
      type: "Functions",
    },
    {
      name: "pi_value",
      symbol: " π ",
      formula: "Math.PI",
      type: "Math_function",
    },
    {
      name: "e_value",
      symbol: " e ",
      formula: "*Math.E",
      type: "Math_function",
    },
    {
      name: "10s_power",
      symbol: " 10^ ",
      formula: "10**",
      type: "Functions",
    },
    {
      name: "ln",
      symbol: " ln( ",
      formula: "Math.log(",
      type: "Math_function",
    },
  
    //   Typography
    {
      name: "(",
      symbol: "(",
      formula: "(",
      type: "braces",
    },
    {
      name: ")",
      symbol: ")",
      formula: ")",
      type: "braces",
    },
  
    // To clear displayed expression
    {
      name: "clearAll",
      symbol: "C ",
      formula: false,
      type: "backspace",
    },
    {
      name: "clearOne",
      symbol: "AC ",
      formula: false,
      type: "backspace",
    },
  
    // Numbers
    {
      name: "7",
      symbol: "7",
      formula: 7,
      type: "number",
    },
    {
      name: "8",
      symbol: "8",
      formula: "8",
      type: "number",
    },
    {
      name: "9",
      symbol: "9",
      formula: "9",
      type: "number",
    },
    {
      name: "4",
      symbol: "4",
      formula: 4,
      type: "number",
    },
    {
      name: "5",
      symbol: "5",
      formula: 5,
      type: "number",
    },
    {
      name: "6",
      symbol: "6",
      formula: 6,
      type: "number",
    },
    {
      name: "1",
      symbol: "1",
      formula: 1,
      type: "number",
    },
    {
      name: "2",
      symbol: "2",
      formula: 2,
      type: "number",
    },
    {
      name: "3",
      symbol: "3",
      formula: 3,
      type: "number",
    },
    {
      name: "0",
      symbol: "0",
      formula: 0,
      type: "number",
    },
  
    //   Operators
    {
      name: "subtraction",
      symbol: " – ",
      formula: "-",
      type: "operator",
    },
    {
      name: "addition",
      symbol: " + ",
      formula: "+",
      type: "operator",
    },
    {
      name: "multiplication",
      symbol: " * ",
      formula: "*",
      type: "operator",
    },
    {
      name: "dot",
      symbol: ".",
      formula: ".",
      type: "number",
    },
    {
      name: "division",
      symbol: "/ ",
      formula: "/",
      type: "operator",
    },
    {
      name: "power",
      symbol: " ^ ",
      formula: "**",
      type: "operator",
    },
    {
      name: "mod",
      symbol: " mod ",
      formula: "%",
      type: "operator",
    },
  
    //   Functions
    {
      name: "calculate",
      symbol: "=",
      formula: false,
      type: "calculate",
    },
    {
      name: "fact",
      symbol: ` ! `,
      formula: "fact",
      type: "factorial",
    },
    {
      name: "power_e",
      symbol: " e^ ",
      formula: "Math.E**",
      type: "power_e",
    },
    {
      name: "power_2",
      symbol: " 2^ ",
      formula: "2**",
      type: "power_2",
    },
  
    //   Stroing buttons details
    {
      name: "MC",
      symbol: " MC ",
      formula: false,
      type: "storing_buttons",
    },
    {
      name: "MR",
      symbol: "MR",
      formula: false,
      type: "storing_buttons",
    },
    {
      name: "M+",
      symbol: "M+",
      formula: false,
      type: "storing_buttons",
    },
    {
      name: "M-",
      symbol: "M-",
      formula: false,
      type: "storing_buttons",
    },
    {
      name: "MS",
      symbol: "MS",
      formula: false,
      type: "storing_buttons",
    },
  ];


  export default buttons_attributes;