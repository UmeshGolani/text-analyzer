export const countCharacters = (text) => {
    return text.length;
  };
  
  export const countWords = (text) => {
    if (text === "") return 0;
    return text.trim().split(" ").length;
  };
  
  export const countSentences = (text) => {
    if (text === "") return 0;
    return text.trim().split(".").length;
  };
  
  export const countParagraphs = (text) => {
    if (text === "") return 0;
    return text.trim().split("\n").length;
  };
  export const countSpaces = (text) => {
    if (text === "") return 0;
    return text.split(" ").length;
  };
  
  export const countPunctuations = (text) => {
    const punctuations = [
      ".",
      ",",
      ";",
      ":",
      "!",
      "?",
      '"',
      "'",
      "-",
      "(",
      ")",
      "[",
      "]",
      "{",
      "}",
      "/",
      "\\",
      "<",
      ">",
      "|",
      "`",
      "~",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "_",
      "+",
      "=",
      "•",
      "–",
      "—",
      "●",
      "►",
      "©",
      "®",
      "™",
    ];
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (punctuations.includes(text[i])) {
        count++;
      }
    }
    return count;
  };
  