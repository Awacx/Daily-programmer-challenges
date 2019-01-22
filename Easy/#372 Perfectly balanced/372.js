function balanced (s) {
  return (!s || (s.match(/y/g).length != s.match(/x/g).length)) ? false:true;
}

function balanced_bonus(s) {
  var count = 0;
  for (i=97; i<123; i++) {
    var RegX = new RegExp(String.fromCharCode(i), "gi");
    var Mtch = (s.match(RegX) || []).length;
    count += (Mtch<1) ? 0:(Mtch == count) ? 0:(count == 0) ? Mtch:(count % 1 > 0) ? 0:0.5; 
  }
  return (s == "") ? true:((count % 1) == 0.5) ? false:true;
}