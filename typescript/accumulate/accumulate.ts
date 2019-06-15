export default function accumulate(array: Array<any>, accumulator: (e: any) => any): any {
    /**
     * Solved with a plain old `for` loop.
     */
    // let result = [];
    // for(let i = 0; i < array.length; i++) {
    //     result.push(accumulator(array[i]));
    // }
    // return result;

    /**
     * Solved with a `for..of` loop.
     */
    // let result = [];
    // for(let element of array) {
    //     result.push(accumulator(element));
    // }
    // return result;

    /**
     * Solved with `forEach` array method.
     */
    // array.forEach((element: any, index: number) => array[index] = accumulator(element));
    // return array;

    /**
     * Solved with `map` array method.
     */
    return array.map(accumulator);
}