function getLatinCharacterList(texte) {
  return texte.split("");
}

function translateLatinCharacter(c) {
  const char = c.toUpperCase();
  return latinToMorse[char];
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
    console.log(m);
    if (m === "/") {
      return " ";
    } else {
      return translateMorseCharacter(m);
    }
  });
  return traduction.join("");
}

console.log(decode("... --- ... / .- ..- / ... . -.-."));
console.log(encode("SOS AU SECOURS"));
