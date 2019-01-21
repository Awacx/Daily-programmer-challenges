var Numbers = [
"oh",
"one",
"two",
"three",
"four",
"five",
"six",
"seven",
"eight",
"nine",
"ten",
"eleven",
"twelve",
"thirteen",
"fourteen",
"fifteen",
"sixteen",
"seventeen",
"eighteen",
"nineteen",
"twenty"
];

Numbers[30] = "thirty";
Numbers[40] = "forty";
Numbers[50] = "fifty";

function clock(sTime) {

  var time = sTime.split(":").map(n => parseInt(n));
  var output = "It's ";
  var AMorPM = " am";
  
// Hours
  if (time[0] >= 12) {
    time[0] -= 12;    
    AMorPM = " pm";
  }
  if (time[0] == 0) {
    time[0] = 12;
  }
  output += Numbers[time[0]]; 
  
// Minutes
  if (time[1] < 10) {
    if (time[1] == 0) {
      return output += AMorPM; 
    } else {
    time[1] = Numbers[0] + " " + Numbers[time[1]];
    }
  } else if (Numbers[time[1]]) {
    time[1] = Numbers[time[1]];
  } else {
    time[1] = Numbers[time[1]-(time[1]%10)] + " " + Numbers[time[1]%10];
  }
return output += " " + time[1] + AMorPM; 
}