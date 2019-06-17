export default class Transcriptor {
    private static DNA_RNA: Map<string, string> = new Map<string, string>([
        ['G', 'C'],
        ['C', 'G'],
        ['T', 'A'],
        ['A', 'U'],
    ]);
    private static DNA_MATCH: RegExp = new RegExp(`^[${Array.from(Transcriptor.DNA_RNA.keys()).join('')}]+$`)
    constructor() {};
    
    public toRna(DNAStrand: string): string {
        if(!Transcriptor.DNA_MATCH.test(DNAStrand)) {
            throw new Error('Invalid input DNA.');
        }
        return DNAStrand.split('').reduce((nucleotides: string, currentNucleotide: string) => nucleotides + Transcriptor.DNA_RNA.get(currentNucleotide), '');
    }
}