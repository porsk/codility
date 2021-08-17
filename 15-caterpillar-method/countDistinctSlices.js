function solution(M, A) {
  const N = A.length;

  // individual elements
  let count = N;

  let left = 0;
  let right = 0;
  const seen = new Set();

  while (left < N && right < N) {
    if (seen.has(A[right])) {
      seen.delete(A[left]);
      left++;
    } else {
      count += right - left;

      seen.add(A[right]);
      right++;
    }

    if (count > 1000000000) {
      return 1000000000;
    }
  }

  return count;
}
