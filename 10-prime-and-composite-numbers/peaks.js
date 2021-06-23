function validateBlocks(N, K, peaks) {
  const blockSize = N / K;
  const helper = new Array(K).fill(false);

  for (let i = 0; i < peaks.length; i++) {
    helper[Math.floor(peaks[i] / blockSize)] = true;
  }

  for (let i = 0; i < helper.length; i++) {
    if (!helper[i]) {
      return false;
    }
  }

  return true;
}

function solution(A) {
  const N = A.length;

  if (N < 3) {
    return 0;
  }

  const peaks = [];

  for (let i = 1; i < N - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  if (peaks.length === 0) {
    return 0;
  }

  for (let i = Math.min(Math.floor(N / 2), peaks.length); i > 0; i--) {
    if (N % i !== 0) {
      continue;
    }

    if (validateBlocks(N, i, peaks)) {
      return i;
    }
  }
}
