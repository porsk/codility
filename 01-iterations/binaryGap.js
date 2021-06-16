function solution(N) {
  if (N < 0) {
    return 0;
  }

  const binary = N.toString(2);

  let biggestGap = 0;
  let currentGap = 0;

  for (let i = 1; i < binary.length; i++) {
    if (binary[i] === "0") {
      if (binary[i - 1] === "0") {
        currentGap++;
      } else {
        currentGap = 1;
      }
    }

    if (binary[i] === "1" && binary[i - 1] === "0") {
      if (biggestGap < currentGap) {
        biggestGap = currentGap;
      }
    }
  }

  return biggestGap;
}
