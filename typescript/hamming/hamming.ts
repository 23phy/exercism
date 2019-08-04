export default class Hamming {
  constructor() {};

  public compute(DNAStrand1: string, DNAStrand2: string): number {
    if(DNAStrand1.length != DNAStrand2.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    let strand1Array: Array<string> = [...DNAStrand1];
    let strand2Array: Array<string> = [...DNAStrand2];

    return strand1Array.filter((nucleotide: string, index: number) => nucleotide !== strand2Array[index]).length;
  }
}