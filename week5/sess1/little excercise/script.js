function vowel_count(str1) {
  var vowel_list = "aeiouAEIOU";
  var vcount = 0;

  for (var i = 0; i < str1.length; i++) {
    if (vowel_list.indexOf(str1[i]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
}

console.log(vowel_count("hello"));
console.log(vowel_count("you are great!"));
console.log(vowel_count("why"));
