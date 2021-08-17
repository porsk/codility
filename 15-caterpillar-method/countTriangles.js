function solution(A) {
  const N = A.length;

  A.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < N - 2; i++) {
    let left = i + 1;
    let right = i + 2;

    while (left < N - 1) {
      if (right < N && A[i] + A[left] > A[right]) {
        right++;
      } else {
        left++;
        count += right - left;
      }
    }
  }

  return count;
}
