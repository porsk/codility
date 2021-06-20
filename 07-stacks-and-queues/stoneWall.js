function solution(H) {
  const N = H.length;
  const stack = [];

  let bricks = 0;

  for (let i = 0; i < N; i++) {
    while (stack.length && stack[stack.length - 1] > H[i]) {
      stack.pop();
    }

    if (stack.length === 0 || stack[stack.length - 1] < H[i]) {
      stack.push(H[i]);
      bricks++;
    }
  }

  return bricks;
}
