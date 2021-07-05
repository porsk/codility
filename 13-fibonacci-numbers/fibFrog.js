function solution(A) {
  // it is valid to step on the other shore
  A.push(1);

  // calculate Fibonacci numbers until N
  const N = A.length;
  const fibs = [1, 1];

  let index = 2;
  while (true) {
    const nextFib = fibs[index - 1] + fibs[index - 2];

    if (nextFib > N) break;

    fibs.push(nextFib);
    index++;
  }

  // reachable leaves from starting point
  const reachable = new Array(N).fill(0);
  for (let i = 0; i < fibs.length; i++) {
    if (A[fibs[i] - 1]) {
      reachable[fibs[i] - 1] = 1;
    }
  }

  for (let i = 0; i < N; i++) {
    if (A[i] && !reachable[i]) {
      // get the minimal jump count to reach this leaf
      let minJumps = Number.MAX_SAFE_INTEGER;
      for (let j = 0; j < fibs.length; j++) {
        const prev = i - fibs[j];

        if (reachable[prev] && minJumps > reachable[prev]) {
          minJumps = reachable[prev];
        }
      }

      if (minJumps !== Number.MAX_SAFE_INTEGER) {
        reachable[i] = minJumps + 1;
      }
    }
  }

  if (reachable[N - 1]) {
    return reachable[N - 1];
  } else {
    return -1;
  }
}
