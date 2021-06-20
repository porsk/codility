function solution(S) {
  const N = S.length;
  const stack = [];

  for (let i = 0; i < N; i++) {
    if (S[i] === "(") {
      stack.push(")");
    } else {
      if (stack.length === 0) {
        return 0;
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length !== 0) {
    return 0;
  }

  return 1;
}
