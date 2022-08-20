const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbols");
const resultEl = document.getElementById("result");
const clipboardEl = document.getElementById("clipboard");
const btnEl = document.getElementById("btn");
const inputLength = document.getElementById("input-length");

// Get Random Password
const randomPassword = {
  lower: getLower,
  upper: getUpper,
  number: getNumber,
  symbol: getSymbol,
};

// Event Listener for clipboard
clipboardEl.addEventListener("click", function () {
  const textarea = document.createElement("textarea");
  textarea.value = resultEl.innerText;

  if (!textarea) {
    return "";
  } else {
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
  }
});

// Event Listener for generating password
btnEl.addEventListener("click", () => {
  const length = +inputLength.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  //   add to result innerHTML
  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

// Generate Password Function
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";

  const passwordCount = lower + upper + number + symbol;
  const passwordArray = [{ lower }, { upper }, { number }, { symbol }].filter(
    (items) => Object.values(items)[0]
  );

  if (passwordCount === 0) {
    return "";
  }
  for (let i = 0; i < length; i += passwordCount) {
    passwordArray.forEach(function (password) {
      const randomFunc = Object.keys(password)[0];

      generatedPassword += randomPassword[randomFunc]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
// Get Random Lowercase Letter
function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Get Random Uppercase Letter
function getUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// Get Random number
function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// Get Random symbol
function getSymbol() {
  const symbols = "!@#$%^&*()-<>{}[]";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
