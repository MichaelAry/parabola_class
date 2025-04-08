class Parabola {
  constructor(name, coefPower2, coefPower1, coefPower0) {
    if (coefPower2 == 0) {
      throw new Error("coefficient for 2nd power of X can't be equal to 0");
    }
    this.name = String(name);
    this.coefPower2 = parseFloat(coefPower2);
    this.coefPower1 = parseFloat(coefPower1);
    this.coefPower0 = parseFloat(coefPower0);
    this.vertex = this.calculateVertex();
  }

  calculateValueAtPoint(x) {
    return (
      this.coefPower2 * Math.pow(x, 2) + this.coefPower1 * x + this.coefPower0
    );
  }

  calculateVertex() {
    const x = -this.coefPower1 / (2 * this.coefPower2);
    const y = this.calculateValueAtPoint(x);
    return [x, y];
  }

  calculateAndOutValueAtPoint(x) {
    console.log(
      `${this.name} takes the value ${
        this.coefPower2 * Math.pow(x, 2) + this.coefPower1 * x + this.coefPower0
      } at point ${x}`
    );

    console.log();
  }
  isEqualParabola(other) {
    if (
      this.coefPower2 == other.coefPower2 &&
      this.coefPower1 === other.coefPower1 &&
      this.coefPower0 == other.coefPower0
    ) {
      console.log(`parabolas are equal`);
    } else console.log(`parabolas are not equal`);
    console.log();
  }
  infoAboutParabola() {
    let a = String(this.coefPower2);
    let b = String(this.coefPower1);
    let c = String(this.coefPower0);
    console.log(
      `parabola ${this.coefPower2}x^2 + ${this.coefPower1}x + ${this.coefPower0}`
    );
    console.log(`with vertex at point (${this.vertex[0]}, ${this.vertex[1]})`);
    console.log();
  }
}

try {
  const parabola1 = new Parabola("parabola1", 1, 2, 3);
  const parabola2 = new Parabola("parabola2", 1, 2, 3);
  parabola1.infoAboutParabola();
  parabola1.calculateAndOutValueAtPoint(1);
  parabola1.isEqualParabola(parabola2);
} catch (error) {
  console.error(error.message);
}
