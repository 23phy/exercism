export default class Squares {
    constructor(private readonly limit: number) {};

    public get squareOfSum(): number {
        // let result: number = 0;
        // for(let i = 1; i <= this.limit; i++) {
        //     result += i;
        // }
        
        // return Math.pow(result, 2);

        /**
         *   n      n * (n + 1)
         *   ∑(k) = -----------
         *  k=1          2
         */
        return Math.pow((this.limit * (this.limit + 1)) / 2, 2);
    }

    public get sumOfSquares(): number {
        // let result = 0;
        // for(let i = 1; i <= this.limit; i++) {
        //     result += Math.pow(i, 2);
        // }
        // return result;

        /**
         *   n        n * (n + 1) * (2n + 1)
         *   ∑(k^2) = ----------------------
         *  k=1                 6
         */
        return this.limit * (this.limit + 1) * (2 * this.limit + 1) / 6;
    }

    public get difference(): number {
        return this.squareOfSum - this.sumOfSquares;
    }
}