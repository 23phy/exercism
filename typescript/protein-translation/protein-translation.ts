function chunkString(str: string, chunkSize: number): RegExpMatchArray | null {
  return str.match(new RegExp(`.{1,${chunkSize}}`, 'g'));
}

export default class ProteinTranslation {
  public static readonly CODON_PROTEIN: any = new Proxy({
    'AUG': 'Methionine',
    'UUU|UUC': 'Phenylalanine',
    'UUA|UUG': 'Leucine',
    'UCU|UCC|UCA|UCG': 'Serine',
    'UAU|UAC': 'Tyrosine',
    'UGU|UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA|UAG|UGA': null
  }, {
      get: (target: any, property: string) => {
        for(let key in target) {
          if(new RegExp(key).test(property)) {
            return target[key];
          }
        }
        return null;
      }
    });

  public static proteins(RNAStrand: string): Array<string> {
    let result: Array<string> = [];
    let chunks: RegExpMatchArray | null = chunkString(RNAStrand, 3);

    if(chunks) {
      for(let i = 0; i < chunks.length; i++) {
        let translatedProtein: string | null = ProteinTranslation.CODON_PROTEIN[chunks[i]];
        if(translatedProtein) {
          result.push(translatedProtein);
        } else {
          break;
        }
      }
    }

    return result;
  }
}