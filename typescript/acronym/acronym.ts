export default class Acronym {
  constructor() {};

  public static parse(phrase: string): string {
    return phrase.split(/\W+/g).map((word: string) => {
      let firstChar = word.charAt(0).toUpperCase();
      if(word.match(/^[A-Z]+$/)) {
          return firstChar;
      }
      return firstChar + word.slice(1).replace(/[^A-Z]/g,"");
    }).join('');
  }
}
