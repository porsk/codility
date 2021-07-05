function gcdOld(a, b) {
  if (a === b) {
    return a;
  } else {
    if (a > b) {
      return gcd(a - b, b);
    } else {
      return gcd(a, b - a);
    }
  }
}

function gcd(a, b) {
  if (a % b === 0) {
    return b;
  } else {
    return gcd(b, a % b);
  }
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(N, M) {
  return lcm(N, M) / M;
}
