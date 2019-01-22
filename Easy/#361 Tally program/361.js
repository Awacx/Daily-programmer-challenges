function score(s) {
  
  var scores = ["a", "b", "c", "d", "e"];

  for (i=0; i<scores.length; i++) {
    
    var Total = new RegExp(scores[i], "gi");                 // search all the occurences of the letter (upper- and lowercase)
        Total = (s.match(Total)) ? s.match(Total).length:0;  // get total number of occurences of the letter (upper- and lowercase) or change value to 0 if no match
    var Lower = new RegExp(scores[i], "g");                  // search all the occurences of the lowercase letter
        Lower = (s.match(Lower)) ? s.match(Lower).length:0;  // get number of occurences of lowercase letter or change value to 0 if there's no match
    
    scores[i] = scores[i] + ":" + (Lower - (Total-Lower));   // calculate the score and populate the scores array with the player's name, a colon and the score
  }
    var output = scores.sort(function(a, b){return b.split(":")[1] - a.split(":")[1]})  // split each element at the colon to sort according to the number part
    return output.toString().replace(/,/g, ", ");            // convert output array to string and add a space after each comma
}