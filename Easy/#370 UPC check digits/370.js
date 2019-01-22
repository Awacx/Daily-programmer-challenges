function CheckUPC(UPC){

  UPC = ("00000000000" + UPC).slice(-11);
  var odd = [];
  var even = [];

  do{ odd.push(UPC.substring(0, 1)); even.push(UPC.substring(1,2)) } 
  while( (UPC = UPC.substring(2, UPC.length)) != "" );

  UPC = 10 - odd.reduce(function(total, num, ind){return (total + (num*3) + Number(even[ind]))} ,0) % 10;

return  UPC = UPC < 10 ? UPC:0;
}