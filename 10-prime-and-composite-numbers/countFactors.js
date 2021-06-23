function solution(N) {
  let i = 0;
  let count = 0;

  while (i * i <= N) {
    if (N % i === 0) {
      if (i === N / i) {
        count++;
      } else {
        count += 2;
      }
    }

    i++;
  }

  return count;
}
