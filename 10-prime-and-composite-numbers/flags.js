function solution(A) {
  const N = A.length;
  let peakPositions = [];

  for (let i = 1; i < N - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peakPositions.push(i);
    }
  }

  const M = Math.floor(Math.sqrt(N)) + 1;
  let maxFlagCount = 0;
  for (let i = 1; i <= M; i++) {
    let count = 0;
    let lastPosition = -i;

    for (const peakPosition of peakPositions) {
      if (peakPosition >= lastPosition + i) {
        count++;
        lastPosition = peakPosition;
      }

      if (count === i) {
        break;
      }
    }

    maxFlagCount = Math.max(maxFlagCount, count);
  }

  return maxFlagCount;
}
