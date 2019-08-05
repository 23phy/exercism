export default class Isogram {
  constructor() {};

  static isIsogram(isogramCheck: string): boolean {
    isogramCheck = isogramCheck.replace(/[\- ]/g, '').toLowerCase();
    let letters: Set<string> = new Set<string>();
    
    for(let i = 0; i < isogramCheck.length; i++) {
      if(letters.has(isogramCheck[i])) {
        return false;
      }
      letters.add(isogramCheck[i]);
    }
    return true;
  }
}