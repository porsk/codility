// with stack
function solution(A) {
  const N = A.length;
  const stack = [];

  for (let i = 0; i < N; i++) {
    if (stack.length === 0 || stack[stack.length - 1] === A[i]) {
      stack.push(A[i]);
    } else {
      stack.pop();
    }
  }
  if (stack.length > 0) {
    const candidate = stack.pop();
    const minCount = Math.floor(N / 2) + 1;

    let count = 0;
    for (let i = 0; i < N; i++) {
      if (A[i] === candidate) {
        count++;

        if (count >= minCount) {
          return i;
        }
      }
    }
  }

  return -1;
}

// with map
function solution(A) {
  const N = A.length;
  const map = {};

  for (let i = 0; i < N; i++) {
    if (map[A[i]]) {
      map[A[i]]++;
    } else {
      map[A[i]] = 1;
    }
  }

  let maxCount = 0;
  let candidate = undefined;
  for (const [value, count] of Object.entries(map)) {
    if (count > maxCount) {
      maxCount = count;
      candidate = parseInt(value);
    }
  }

  if (maxCount >= Math.floor(N / 2) + 1) {
    for (let i = 0; i < N; i++) {
      if (A[i] === candidate) {
        return i;
      }
    }
  }

  return -1;
}
