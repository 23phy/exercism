export default class Rational {
  constructor(private numerator: number = 0, private denominator: number = 1) {
    if(this.denominator < 0) {
      this.numerator = -this.numerator;
      this.denominator = -this.denominator;
    }
  }

  // a/b + c/d = (ad + bc) / bd
  public add(other: Rational): Rational {
    const numerator = this.numerator * other.denominator + this.denominator * other.numerator;
    const denominator = this.denominator * other.denominator;
    
    return new Rational(numerator, denominator).reduce();
  }

  // a/b + c/d = (ad - bc) / bd
  public sub(other: Rational): Rational {
    const numerator = this.numerator * other.denominator - this.denominator * other.numerator;
    const denominator = this.denominator * other.denominator;
    
    return new Rational(numerator, denominator).reduce();
  };

  // a/b * c/d = ac / bd
  public mul(other: Rational): Rational {
    const numerator = this.numerator * other.numerator;
    const denominator = this.denominator * other.denominator;
    
    return new Rational(numerator, denominator).reduce();
  };

  // a/b * c/d = ad / bc
  public div(other: Rational): Rational {
    const numerator = this.numerator * other.denominator;
    const denominator = this.denominator * other.numerator;
    
    return new Rational(numerator, denominator).reduce();
  };

  // |a/b| = |a| / |b|
  public abs(): Rational {
    this.numerator = Math.abs(this.numerator);
    this.denominator = Math.abs(this.denominator);
    return this.reduce();
  };

  // (a/b)^c = a^c / b^c
  public exprational(exponent: number): Rational {
    this.numerator = Math.pow(this.numerator, Math.abs(exponent));
    this.denominator = Math.pow(this.denominator, Math.abs(exponent));
    return this.reduce();
  };

  // a^(b/c) = root(a^b, c),
  public expreal(exponent: number): number {
    return Math.round(Math.pow(Math.pow(exponent, this.numerator), 1 / this.denominator));
  };

  // @ts-ignore
  public reduce(): Rational {
    function greatestCommonDivisor(a: number, b: number): number {
      if(!b) { return Math.abs(a); };
      return greatestCommonDivisor(b, a % b);
    }

    const GCD = greatestCommonDivisor(this.numerator, this.denominator);
    if(GCD > 1) {
      this.numerator /= GCD;
      this.denominator /= GCD;
    }
    return this;
  };

}