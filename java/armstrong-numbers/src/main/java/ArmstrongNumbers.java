class ArmstrongNumbers {

  boolean isArmstrongNumber(int numberToCheck) {
    int sum = 0;
    
    String[] stringToCheck = Integer.toString(numberToCheck).split("");
    for(String digit : stringToCheck) {
      sum += Math.pow(Integer.parseInt(digit), stringToCheck.length);
    }

    return numberToCheck == sum;
  }

}
