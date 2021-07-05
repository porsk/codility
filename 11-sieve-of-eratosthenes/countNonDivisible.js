function solution(A) {
  const N = A.length;
  const counts = {};

  for (let i = 0; i < N; i++) {
    if (counts[A[i]]) {
      counts[A[i]]++;
    } else {
      counts[A[i]] = 1;
    }
  }

  const numbers = Object.keys(counts);
  const nonDivisors = {};
  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];

    let divisors = 0;
    let j = 0;

    while (j * j <= current) {
      if (current % j === 0) {
        if (counts[j]) {
          divisors += counts[j];
        }

        const divisorPair = current / j;
        if (divisorPair !== j) {
          if (counts[divisorPair]) {
            divisors += counts[divisorPair];
          }
        }
      }

      j++;
    }

    nonDivisors[current] = N - divisors;
  }

  const result = [];
  for (let i = 0; i < N; i++) {
    result.push(nonDivisors[A[i]]);
  }

  return result;
}
