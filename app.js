const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let btn = document.querySelector("#btn");
let password1 = document.querySelector("#password1");
let password2 = document.querySelector("#password2");

const generateNewPassword = () => {
  let str = "";
  for (let i = 0; i < 15; i++) {
    str += characters[Math.floor(Math.random() * characters.length)];
  }
  return str;
};

const generateNewPasswords = () => {
  password1.textContent = generateNewPassword();
  password2.textContent = generateNewPassword();
};

btn.addEventListener("click", generateNewPasswords);

const showSnackBar = () => {
  let sb = document.getElementById("snackbar");
  sb.className = "show";
  setTimeout(() => {
    sb.className = sb.className.replace("show", "");
  }, 3000);
};

const copyText = (passId) => {
  const passElement = document.getElementById(passId);

  if (passElement) {
    const range = document.createRange();
    //select the text node of the element
    range.selectNodeContents(passElement);
    // get the selection object
    const selection = window.getSelection();
    //remove any existing selections
    selection.removeAllRanges();
    //add the new range to the selection
    selection.addRange(range);

    //Copy the selected text to the clipboard
    navigator.clipboard
      .writeText(selection.toString())
      .then(() => {
        //show success message
        showSnackBar();
      })
      .catch((err) => {
        //show error message
        alert("Failed to copy the password. Please try again.");
        console.error("Error copying text : ", err);
      });
    //clear the selection
    selection.removeAllRanges();
  } else {
    console.error(`Element with id "${passId}" does not exist.`);
  }
};
