function solution(A) {
  const N = A.length;

  const counter = new Array(N).fill(false);

  for (let i = 0; i < N; i++) {
    if (!counter[A[i] - 1]) {
      counter[A[i] - 1] = true;
    } else {
      return 0;
    }
  }

  for (let i = 0; i < N; i++) {
    if (!counter[i]) {
      return 0;
    }
  }

  return 1;
}
