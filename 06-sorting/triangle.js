function isTriangular(P, Q, R) {
  return P + Q > R && Q + R > P && R + P > Q;
}

function solution(A) {
  A.sort((a, b) => b - a);

  for (let i = 0; i < A.length - 2; i++) {
    if (isTriangular(A[i], A[i + 1], A[i + 2])) {
      return 1;
    }
  }

  return 0;
}
