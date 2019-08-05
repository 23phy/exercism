export default class Anagram {
  constructor(public readonly anagram: string) {}

  public matches(...possibleMatches: Array<string>): Array<string> {
    return possibleMatches.filter((element: string) => element.toLowerCase() !== this.anagram && [...this.anagram.toLowerCase()].sort().join('') === [...element.toLowerCase()].sort().join(''))
  }
}
