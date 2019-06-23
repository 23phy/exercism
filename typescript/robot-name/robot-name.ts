export let usedNames = new Set<string>();

export default class RobotName {
    public name: string;

    constructor() {
        this.generateName();
    }

    private generateName() {
        do {
            this.name = String.fromCharCode(this.randomBetween(65, 90));
            this.name += String.fromCharCode(this.randomBetween(65, 90));

            this.name += this.randomBetween(0, 9);
            this.name += this.randomBetween(0, 9);
            this.name += this.randomBetween(0, 9);
        } while(usedNames.has(this.name));

        usedNames.add(this.name);
    }

    private randomBetween(minimum: number = 0, maximum: number = 1): number {
        return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    }

    public resetName(): void {
        this.name = '';
        this.generateName();
    }

}