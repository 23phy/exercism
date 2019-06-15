export default class Words {
    constructor() {};

    public count(words: string): any {
        let wordsMap: Map<String, number> = new Map();
        
        words.trim().toLowerCase().split(/\s+/i).forEach((word: string) => {
            let count: number | undefined = wordsMap.get(word);
            wordsMap.set(word, count ? ++count : 1);
        });
        return wordsMap;
    }
}