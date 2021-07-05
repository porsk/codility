function solution(N, P, Q) {
  // Sieve of Eratosthenes
  let primes = new Array(N).fill(true);
  primes[0] = primes[1] = false;

  for (let i = 2; i < Math.sqrt(N); i++) {
    if (primes[i]) {
      for (let j = i + i; j <= N; j += i) {
        primes[j] = false;
      }
    }
  }

  // converting to list of primes
  primes = primes.reduce((acc, value, index) => {
    if (value) acc.push(index);

    return acc;
  }, []);

  // calculating semiprimes
  const semiPrimes = new Set();
  for (let i = 0; i < primes.length; i++) {
    for (let j = 0; j < primes.length; j++) {
      const semiPrime = primes[i] * primes[j];

      if (semiPrime <= N) {
        semiPrimes.add(semiPrime);
      }
    }
  }

  // computing prefix sums of semiprimes
  const cumSum = [0];
  for (let i = 0; i <= N; i++) {
    cumSum.push(cumSum[i]);

    if (semiPrimes.has(i + 1)) {
      cumSum[i + 1]++;
    }
  }

  // running queries
  const results = [];
  for (let i = 0; i < P.length; i++) {
    results.push(cumSum[Q[i]] - cumSum[P[i] - 1]);
  }

  return results;
}
