function translatePigLatin(str) {

  
  if (/^[aeiou]/.test(str)) {
    return str + "way";
  }

  let consonant = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    
    if (/^[^aeiou]+/.test(str)) {
      consonant += str.match(/^[^aeiou]+/);
      count = consonant.length;
      str = str.slice(count);
    } else {
      break;
    }

  }

  
  return str + consonant + "ay";
}

console.log(translatePigLatin("schwartz")); // print "artzschway"

