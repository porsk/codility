function solution(A, B) {
  const L = A.length;
  const limit = 1 << Math.max(...B);
  const fibs = [1, 1];

  for (let i = 2; i < L + 1; i++) {
    fibs.push((fibs[i - 1] + fibs[i - 2]) % limit);
  }

  const result = [];
  for (let i = 0; i < L; i++) {
    result.push(fibs[A[i]] % (1 << B[i]));
  }

  return result;
}
