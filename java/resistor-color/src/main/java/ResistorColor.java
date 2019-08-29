import java.util.LinkedHashMap;
import java.util.Set;

class ResistorColor {

  private LinkedHashMap<String, Integer> colors;

  ResistorColor() {
    this.colors = new LinkedHashMap<String, Integer>();

    this.colors.put("black", 0);
    this.colors.put("brown", 1);
    this.colors.put("red", 2);
    this.colors.put("orange", 3);
    this.colors.put("yellow", 4);
    this.colors.put("green", 5);
    this.colors.put("blue", 6);
    this.colors.put("violet", 7);
    this.colors.put("grey", 8);
    this.colors.put("white", 9);
  }

  int colorCode(String color) {
    return this.colors.get(color);
  }

  String[] colors() {
    Set<String> colorsKeys = this.colors.keySet();
    return colorsKeys.toArray(new String[colorsKeys.size()]);
  }
}