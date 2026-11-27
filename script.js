//elements de la page
const latinInput = document.querySelector("#latin-input");
const morseOutput = document.querySelector("#morse-output");
const encodeBtn = document.querySelector("#encode-btn");

const morseInput = document.querySelector("#morse-input");
const latinOutput = document.querySelector("#latin-output");
const decodeBtn = document.querySelector("#decode-btn");

//fonctions
function getLatinCharacterList(texte) {
  return texte.split("");
}

function translateLatinCharacter(c) {
  switch (true) {
    case /\p{P}/gu.test(c):
      return c;
    default:
      const char = c.toUpperCase();
      return latinToMorse[char];
  }
}

function encode(texte) {
  const charATraduire = getLatinCharacterList(texte);
  const traduction = charATraduire.map((char) => {
    if (char === " ") {
      return " ";
    } else {
      return translateLatinCharacter(char);
    }
  });

  return traduction.join(" ");
}

function getMorseCharacterList(morse) {
  return morse.split(" ");
}

function translateMorseCharacter(m) {
  return morseToLatin[m];
}
function decode(morse) {
  const liste = getMorseCharacterList(morse);
  const traduction = liste.map((m) => {
    if (m === "/") {
      return " ";
    } else {
      return translateMorseCharacter(m);
    }
  });
  return traduction.join("");
}

encodeBtn.addEventListener("click", () => {
  const texteATraduire = latinInput.value;
  morseOutput.textContent = encode(texteATraduire);
});

decodeBtn.addEventListener("click", () => {
  const morseAtraduire = morseInput.value;
  latinOutput.textContent = decode(morseAtraduire);
});
