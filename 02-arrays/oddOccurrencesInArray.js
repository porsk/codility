function solution(A) {
  const map = {};

  for (let i = 0; i < A.length; i++) {
    if (map[A[i]]) {
      delete map[A[i]];
    } else {
      map[A[i]] = true;
    }
  }

  return Number(Object.keys(map)[0]);
}
