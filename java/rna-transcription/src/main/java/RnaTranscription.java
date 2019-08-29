import java.util.HashMap;
import java.util.Set;
import java.util.regex.Pattern;

class RnaTranscription {
  
  static HashMap<String, String> DNA_RNA;
  static Pattern DNA_MATCH;

  public RnaTranscription() {
    RnaTranscription.DNA_RNA = new HashMap<String, String>();

    RnaTranscription.DNA_RNA.put("G", "C");
    RnaTranscription.DNA_RNA.put("C", "G");
    RnaTranscription.DNA_RNA.put("T", "A");
    RnaTranscription.DNA_RNA.put("A", "U");
    
    Set<String> nucleotidesKeys = RnaTranscription.DNA_RNA.keySet();
    String[] toArray = nucleotidesKeys.toArray(new String[nucleotidesKeys.size()]);
    RnaTranscription.DNA_MATCH = Pattern.compile("^[" + String.join("", toArray) + "]+$");
  }

  String transcribe(String dnaStrand) {

    if (!RnaTranscription.DNA_MATCH.matcher(dnaStrand).matches()) {
      return "";
    }
    String result = "";
    
    for(String DNA : dnaStrand.split("")) {
      result += RnaTranscription.DNA_RNA.get(DNA);
    }

    return result;
  }
}
