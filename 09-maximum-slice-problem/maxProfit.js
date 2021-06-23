function solutionOne(A) {
  const N = A.length;

  let maxProfit = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < N; i++) {
    if (A[i] < minPrice) {
      minPrice = A[i];
    } else {
      if (maxProfit < A[i] - minPrice) {
        maxProfit = A[i] - minPrice;
      }
    }
  }

  return maxProfit;
}

function solutionTwo(A) {
  const N = A.length;

  let maxProfit = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < N; i++) {
    minPrice = Math.min(minPrice, A[i]);
    maxProfit = Math.max(maxProfit, A[i] - minPrice);
  }

  return maxProfit;
}
