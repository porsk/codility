function solution(A) {
  const N = A.length;
  const left = new Array(N).fill(0);
  const right = new Array(N).fill(0);

  for (let i = 1; i < N - 1; i++) {
    left[i] = Math.max(0, left[i - 1] + A[i]);
    right[N - 1 - i] = Math.max(0, right[N - i] + A[N - 1 - i]);
  }

  let maxDoubleSlice = 0;

  for (let i = 1; i < N - 1; i++) {
    maxDoubleSlice = Math.max(maxDoubleSlice, left[i - 1] + right[i + 1]);
  }

  return maxDoubleSlice;
}
