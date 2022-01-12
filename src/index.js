module.exports = function reverse (n) {
  if (n < 0){
      n = -n;
  }
  let s = String(n);
  let arrS = [];
  arrS = s.split('');
  let arrNS = [];
  arrNS = arrS.reverse();
  let reverseS = arrNS.join('');
  let newN = Number(reverseS);
  return newN;
}


