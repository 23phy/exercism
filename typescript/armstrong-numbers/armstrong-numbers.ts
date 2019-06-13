export default class ArmstrongNumbers {
    constructor() {};
    public static isArmstrongNumber(num: number): boolean {
        let result: number = 0;

        const digitsArray: Array<number> = String(num).split('').map(Number);

        digitsArray.forEach((digit: number) => {
            result += Math.pow(digit, digitsArray.length);
        });
        return result === num;
    }
}