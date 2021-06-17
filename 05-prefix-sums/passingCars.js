function solution(A) {
  const N = A.length;
  const ones = [0];

  for (let i = 0; i < N; i++) {
    ones.push(ones[i]);

    if (A[i] === 1) {
      ones[i + 1]++;
    }
  }

  let passingCount = 0;

  for (let i = 0; i < N; i++) {
    if (A[i] === 0) {
      passingCount += ones[N] - ones[i + 1];

      if (passingCount > 1000000000) {
        return -1;
      }
    }
  }

  return passingCount;
}
