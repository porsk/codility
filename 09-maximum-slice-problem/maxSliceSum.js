function solutionOne(A) {
  const N = A.length;

  let maxSlice = Number.MIN_SAFE_INTEGER;
  let maxEnding = 0;

  for (let i = 0; i < N; i++) {
    maxEnding = Math.max(maxEnding + A[i], A[i]);
    maxSlice = Math.max(maxSlice, maxEnding);
  }

  return maxSlice;
}

function solutionTwo(A) {
  const N = A.length;

  let maxSlice = A[0]; // maximum sum
  let acc = 0; // storing cumulative sum

  for (let i = 0; i < N; i++) {
    acc += A[i];

    maxSlice = Math.max(maxSlice, acc);

    // if acc is negative at the current step, it restarts cumulative sum by assigning 0
    if (acc < 0) {
      acc = 0;
    }
  }

  return maxSlice;
}
