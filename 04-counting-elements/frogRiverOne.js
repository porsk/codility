function solution(X, A) {
  const N = A.length;
  const map = {};
  let count = 0;

  for (let i = 0; i < X; i++) {
    map[i + 1] = false;
  }

  for (let i = 0; i < N; i++) {
    if (!map[A[i]]) {
      map[A[i]] = true;

      count++;
    }

    if (count === X) {
      return i;
    }
  }

  return -1;
}
