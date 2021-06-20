function solution(A) {
  const N = A.length;

  A.sort((a, b) => b - a);

  return Math.max(A[0] * A[1] * A[2], A[N - 1] * A[N - 2] * A[0]);
}
