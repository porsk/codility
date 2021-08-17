function solution(K, A) {
  const N = A.length;

  let count = 0;
  let currentSum = 0;

  for (let i = 0; i < N; i++) {
    currentSum += A[i];

    if (currentSum >= K) {
      currentSum = 0;
      count++;
    }
  }

  return count;
}
