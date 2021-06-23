function solution(N) {
  let minPerimeter = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i * i <= N; i++) {
    if (N % i === 0) {
      minPerimeter = Math.min(minPerimeter, 2 * (i + N / i));
    }
  }

  return minPerimeter;
}
