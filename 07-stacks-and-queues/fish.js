function solution(A, B) {
  const N = A.length;
  const stack = [];

  let count = 0;

  for (let i = 0; i < N; i++) {
    if (B[i] === 1) {
      stack.push(A[i]);
    } else {
      if (stack.length === 0) {
        count++;
      } else {
        while (stack.length && stack[stack.length - 1] < A[i]) {
          stack.pop();
        }

        if (stack.length === 0) {
          count++;
        }
      }
    }
  }

  return count + stack.length;
}
