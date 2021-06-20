function solution(A) {
  const N = A.length;
  const map = {};

  for (let i = 0; i < N; i++) {
    const openAt = i - A[i];
    const closeAt = A[i] + i;

    if (!map[openAt]) {
      map[openAt] = {
        open: 1,
        close: 0,
      };
    } else {
      map[openAt].open++;
    }

    if (!map[closeAt]) {
      map[closeAt] = {
        open: 0,
        close: 1,
      };
    } else {
      map[closeAt].close++;
    }
  }

  let opened = 0;
  let intersections = 0;
  for (let key of Object.keys(map).sort((a, b) => a - b)) {
    const value = map[key];

    for (let j = 0; j < value.open; j++) {
      intersections += opened;
      opened++;
    }

    opened -= value.close;

    if (intersections > 10000000) {
      return -1;
    }
  }

  return intersections;
}
