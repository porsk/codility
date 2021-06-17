function solution(A) {
  /* Consider a slice of size 4. You can always break it down into two slices of size 2.
  One of two cases may happen. First, the averages of the two slices are the same, in which case,
  you could just use the first average. Second, the averages are different, in which case,
  your original slice cannot be the min-average slice.So the slice of size 4 is either duplicated
  with a shorter slice, or not the min. You cannot make this argument with a slice of size 3. */

  const N = A.length;

  let lowestIndex = 0;
  let lowestAvg = Number.MAX_SAFE_INTEGER;
  let last = undefined;
  let lastButOne = undefined;

  for (let i = 0; i < N; i++) {
    if (last !== undefined) {
      const avg = (last + A[i]) / 2;

      if (avg < lowestAvg) {
        lowestAvg = avg;
        lowestIndex = i - 1;
      }
    }

    if (lastButOne !== undefined) {
      const avg = (lastButOne + last + A[i]) / 3;

      if (avg < lowestAvg) {
        lowestAvg = avg;
        lowestIndex = i - 2;
      }
    }

    lastButOne = last;
    last = A[i];
  }

  return lowestIndex;
}
