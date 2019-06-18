export default class Pangram {
    private readonly markedLetters: Array<boolean>;

    constructor(private readonly pangram: string) {
        this.markedLetters = new Array<boolean>(26).fill(false);
    };

    public isPangram(): boolean {
        this.pangram.toLowerCase().split('').forEach((letter: string) => {
            if(letter >= 'a' && letter <= 'z') {
                this.markedLetters[letter.charCodeAt(0) - 97] = true;
            }
        });

        return !this.markedLetters.includes(false);
    }
}