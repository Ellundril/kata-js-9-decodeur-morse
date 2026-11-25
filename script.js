const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

function getLatinCharacterList(texte) {
  return texte.split("");
}

function translateLatinCharacter(c) {
  const char = c.toUpperCase();
  return latinToMorse[char];
}

function encode(texte) {
  const charATraduire = getLatinCharacterList(texte);
  console.log(charATraduire);
  const traduction = charATraduire.map((char) => {
    if (char === " ") {
      return " ";
    } else {
      return translateLatinCharacter(char);
    }
  });

  return traduction.join(" ");
}
