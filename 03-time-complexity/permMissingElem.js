function solution(A) {
  const N = A.length;
  const helper = new Array(N + 1).fill(false);

  for (let i = 0; i < N; i++) {
    helper[A[i] - 1] = true;
  }

  for (let i = 0; i < N + 1; i++) {
    if (!helper[i]) {
      return i + 1;
    }
  }
}
