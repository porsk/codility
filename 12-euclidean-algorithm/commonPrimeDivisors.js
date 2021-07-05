function gcd(a, b) {
  if (a % b === 0) {
    return b;
  } else {
    return gcd(b, a % b);
  }
}

function solution(A, B) {
  const Z = A.length;

  let count = 0;
  for (let i = 0; i < Z; i++) {
    let a = A[i];
    let b = B[i];

    const g = gcd(a, b);

    while (true) {
      const d = gcd(a, g);

      if (d === 1) break;

      a = a / d;
    }

    while (true) {
      const d = gcd(b, g);

      if (d === 1) break;

      b = b / d;
    }

    if (a === 1 && b === 1) {
      count++;
    }
  }

  return count;
}
