function solution(A) {
  const N = A.length;

  let rightSum = A.reduce((acc, value) => acc + value, 0);
  let leftSum = 0;
  let minDiff = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < N - 1; i++) {
    leftSum += A[i];
    rightSum -= A[i];

    const currentDiff = Math.abs(leftSum - rightSum);

    if (currentDiff < minDiff) {
      minDiff = currentDiff;
    }
  }

  return minDiff;
}
