function translatePigLatin(str) {

  let regex = /^[^aeiou]+/ig;
  if (regex.test(str)) {
    let consonant = str.match(regex);
    console.log(consonant)
    
    //str.concat(consonant[0]).splice(1).concat("ay").join("");
  }
  //return str;
  return str;
}

console.log(translatePigLatin("clonsonant"));
