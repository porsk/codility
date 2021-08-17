function solution(A) {
  const N = A.length;
  const set = new Set();

  for (let i = 0; i < N; i++) {
    set.add(Math.abs(A[i]));
  }

  return set.size;
}
