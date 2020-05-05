var bitwiseComplement = function(N) {
  if (N === 0) return 1;
  
  // get the reversed binary string
  let bi = '';
  while (N > 0) {
    bi += N % 2 === 1 ? '0' : '1';
    N = Math.floor(N / 2);
  }
  
  // calculate the complement
  let sum = 0, mul = 1;
  for (let digit of bi) {
    if (digit === '1') sum += mul;
    mul *= 2;
  }
  return sum;
};