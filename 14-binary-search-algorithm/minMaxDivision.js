function solution(K, M, A) {
  const N = A.length;

  let begin = Math.max(...A);
  let end = A.reduce((acc, value) => acc + value, 0);
  let result = 0;

  while (begin <= end) {
    const mid = Math.floor((begin + end) / 2);

    let currentSum = 0;
    let blocks = 1;

    for (let i = 0; i < N; i++) {
      if (currentSum + A[i] > mid) {
        blocks++;
        currentSum = A[i];

        if (blocks > K) {
          break;
        }
      } else {
        currentSum += A[i];
      }
    }

    if (blocks > K) {
      begin = mid + 1;
    } else {
      result = mid;
      end = mid - 1;
    }
  }

  return result;
}
