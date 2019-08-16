export default class Raindrops {
  private readonly map: Map<number, string> = new Map<number, string>([
    [3, 'Pling'],
    [5, 'Plang'],
    [7, 'Plong'],
  ]);

  constructor() { }

  public convert(drop: number): string {
    let result: string = '';

    for (const [number, string] of this.map) {
      if (drop % number === 0) {
        result += string;
      }
    }
    
    return result == '' ? drop.toString() : result;
  }
}