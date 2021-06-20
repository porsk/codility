function solution(A) {
  const N = A.length;
  const map = {};

  for (let i = 0; i < N; i++) {
    map[A[i]] = true;
  }

  return Object.keys(map).length;
}
