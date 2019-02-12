var arr = [];

function add(n, i=0) {
  arr[i] = (n%10)+1;
  return (~~(n/10)<1) ? arr.reduceRight((acc, curr) => acc*Math.pow(10, ~~(Math.log10(curr))+1)+curr):add(~~(n/10), i+1);
}