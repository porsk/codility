function solution(A) {
  const N = A.length;
  const map = {};

  for (let i = 0; i < N; i++) {
    if (!map[A[i]]) {
      map[A[i]] = true;
    }
  }

  for (let i = 1; i < 1000000; i++) {
    if (!map[i]) {
      return i;
    }
  }
}
