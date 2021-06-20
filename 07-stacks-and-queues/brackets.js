function solution(S) {
  const BRACKETS = { "(": ")", "{": "}", "[": "]" };
  const OPENINGS = Object.keys(BRACKETS);
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    const char = S[i];

    if (OPENINGS.includes(char)) {
      stack.push(char);
    } else if (BRACKETS[stack.pop()] !== char) {
      return 0;
    }
  }

  if (stack.length !== 0) {
    return 0;
  }

  return 1;
}
