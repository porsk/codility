function solution(S, P, Q) {
  const N = S.length;
  const M = P.length;

  const A = [0];
  const C = [0];
  const G = [0];
  const T = [0];

  for (let i = 0; i < N; i++) {
    A.push(A[i]);
    C.push(C[i]);
    G.push(G[i]);
    T.push(T[i]);

    const nucleotide = S[i];

    if (nucleotide === "A") {
      A[i + 1]++;
    } else if (nucleotide === "C") {
      C[i + 1]++;
    } else if (nucleotide === "G") {
      G[i + 1]++;
    } else {
      T[i + 1]++;
    }
  }

  const impacts = [];

  for (let i = 0; i < M; i++) {
    const start = P[i];
    const end = Q[i] + 1;

    if (A[start] < A[end]) {
      impacts.push(1);
    } else if (C[start] < C[end]) {
      impacts.push(2);
    } else if (G[start] < G[end]) {
      impacts.push(3);
    } else {
      impacts.push(4);
    }
  }

  return impacts;
}
