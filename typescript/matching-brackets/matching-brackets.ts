export default class MatchinBrackets {
    private characterStack: Array<string> = [];
    private bracketMap: Map<string, string> = new Map<string, string>([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ]);

    constructor(private readonly text: string) { };

    public isPaired(): boolean {
        for (const character of this.text) {
            if (this.bracketMap.has(character)) {
                this.characterStack.push(character);
            } else if (')]}'.includes(character)) {
                let lastCharacter: string | undefined = this.characterStack.pop();

                if (lastCharacter && character !== this.bracketMap.get(lastCharacter)) {
                    return false;
                }
            }
        }

        return this.characterStack.length === 0;
    }
}