function solution(A, B, C) {
  const N = A.length;
  const M = C.length;

  const planks = [];
  for (let i = 0; i < N; i++) {
    planks.push({ start: A[i], end: B[i] });
  }

  planks.sort((a, b) => a.start - b.start);

  for (let i = 0; i < M; i++) {
    let begin = 0;
    let end = planks.length - 1;

    while (begin <= end) {
      const mid = Math.floor((begin + end) / 2);

      if (planks[mid].start > C[i]) {
        end = mid - 1;
      } else if (planks[mid].end < C[i]) {
        begin = mid + 1;
      } else {
        planks.splice(mid, 1);
        end--;

        if (planks.length === 0) {
          return i + 1;
        }
      }
    }
  }

  return -1;
}
