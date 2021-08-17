function solutionA(A) {
  const N = A.length;

  A.sort((a, b) => Math.abs(a) - Math.abs(b));

  let min = Math.abs(A[0] + A[0]);
  for (let i = 0; i < N - 1; i++) {
    const current = Math.abs(A[i] + A[i + 1]);

    if (current < min) {
      min = current;
    }
  }

  return min;
}

function solutionB(A) {
  const N = A.length;

  A.sort((a, b) => a - b);

  let left = 0;
  let right = N - 1;

  let min = Number.MAX_SAFE_INTEGER;

  while (left <= right) {
    const currentSum = A[left] + A[right];
    const currentAbs = Math.abs(currentSum);

    if (currentAbs < min) {
      min = currentAbs;
    }

    if (currentSum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return min;
}
