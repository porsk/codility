function solution(A) {
  // find the leader of the orignal array
  const N = A.length;
  const stack = [];

  for (let i = 0; i < N; i++) {
    if (stack.length === 0 || stack[stack.length - 1] === A[i]) {
      stack.push(A[i]);
    } else {
      stack.pop();
    }
  }

  const leader = stack.pop();
  let totalLeaderCount = 0;
  for (let i = 0; i < N; i++) {
    if (A[i] === leader) {
      totalLeaderCount++;
    }
  }

  // search for equi leaders
  let equiLeaderCount = 0;
  let leftLeaderCount = 0;
  let rightLeaderCount = totalLeaderCount;
  for (let i = 0; i < N; i++) {
    if (A[i] === leader) {
      leftLeaderCount++;
      rightLeaderCount--;
    }

    if (
      leftLeaderCount >= Math.floor((i + 1) / 2) + 1 &&
      rightLeaderCount >= Math.floor((N - 1 - i) / 2) + 1
    ) {
      equiLeaderCount++;
    }
  }

  return equiLeaderCount;
}
