export default class CollatzConjecture {
  constructor() {}

  public static steps(n: number): number {
    if(n <= 0) {
      throw new Error('Only positive numbers are allowed');
    }

    let steps: number = 0;

    while(n > 1) {
      n = (n % 2 == 0) ? (n / 2) : (3 * n + 1);
      steps++;
    }
    return steps;
  }
}

