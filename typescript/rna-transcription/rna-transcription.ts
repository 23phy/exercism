export default class Transcriptor {
    private static DNA_RNA: Map<string, string> = new Map<string, string>([
        ['G', 'C'],
        ['C', 'G'],
        ['T', 'A'],
        ['A', 'U'],
    ]);
    constructor() {};
    
    public toRna(DNAStrand: string): string {
        return DNAStrand.split('').reduce((nucleotides: string, currentNucleotide: string): string => {
            if(!Transcriptor.DNA_RNA.has(currentNucleotide)) {
                throw new Error('Invalid input DNA.');
            }
            return nucleotides + Transcriptor.DNA_RNA.get(currentNucleotide);
        }, '');
    }
}