function solution(A, B) {
  const N = A.length;

  if (N === 0) {
    return 0;
  }

  let count = 1;
  let right = B[0];

  for (let i = 1; i < N; i++) {
    if (A[i] > right) {
      count++;
      right = B[i];
    }
  }

  return count;
}
