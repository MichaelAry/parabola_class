class Parabola {
  #name;
  #coefPower2;
  #coefPower1;
  #coefPower0;
  #vertex;

  constructor(name, coefPower2, coefPower1, coefPower0) {
    this.setName(name);
    this.setCoefPower2(coefPower2);
    this.setCoefPower1(coefPower1);
    this.setCoefPower0(coefPower0);
    this.#vertex = this.#calculateVertex();
  }

  setName(value) {
    this.#name = String(value);
  }

  setCoefPower2(value) {
    const a = parseFloat(value);
    if (a === 0) {
      throw new Error("coefficient for the 2nd power can't be equal to 0");
    }
    this.#coefPower2 = a;
    this.#updateVertex();
  }

  setCoefPower1(value) {
    this.#coefPower1 = parseFloat(value);
    this.#updateVertex();
  }

  setCoefPower0(value) {
    this.#coefPower0 = parseFloat(value);
    this.#updateVertex();
  }

  #calculateVertex() {
    const x = -this.#coefPower1 / (2 * this.#coefPower2);
    const y = this.calculateValueAtPoint(x);
    return [x, y];
  }

  #updateVertex() {
    this.#vertex = this.#calculateVertex();
  }

  add(other) {
    if (!(other instanceof Parabola)) {
      throw new Error("can be summed only with another Parabola");
    }
    return new Parabola(
      `${this.#name} + ${other.#name}`,
      this.#coefPower2 + other.#coefPower2,
      this.#coefPower1 + other.#coefPower1,
      this.#coefPower0 + other.#coefPower0
    );
  }

  subtract(other) {
    if (!(other instanceof Parabola)) {
      throw new Error("can subtract only with another Parabola");
    }
    return new Parabola(
      `${this.#name} - ${other.#name}`,
      this.#coefPower2 - other.#coefPower2,
      this.#coefPower1 - other.#coefPower1,
      this.#coefPower0 - other.#coefPower0
    );
  }

  multiplyByNumber(num) {
    return new Parabola(
      `${this.#name} * ${num}`,
      this.#coefPower2 * num,
      this.#coefPower1 * num,
      this.#coefPower0 * num
    );
  }

  set(other) {
    if (!(other instanceof Parabola)) {
      throw new Error("can set only Parabola children");
    }
    this.setName(other.#name);
    this.setCoefPower2(other.#coefPower2);
    this.setCoefPower1(other.#coefPower1);
    this.setCoefPower0(other.#coefPower0);
  }

  areEqual(other) {
    if (!(other instanceof Parabola)) return false;
    return (
      this.#coefPower2 === other.#coefPower2 &&
      this.#coefPower1 === other.#coefPower1 &&
      this.#coefPower0 === other.#coefPower0
    );
  }

  calculateZeroesAxisX() {
    const discreminant =
      this.#coefPower1 * this.#coefPower1 -
      4 * this.#coefPower2 * this.#coefPower0;
    if (discreminant < 0) {
      console.log(`parabola doesn't touch X axis`);
    } else if (discreminant == 0) {
      console.log(
        `parabola touches with X axis at point (${
          -this.#coefPower1 / (2 * this.#coefPower2)
        }, 0)`
      );
    } else {
      console.log(
        `paraboal touches with X axis at two points: (${
          (-this.#coefPower1 + Math.sqrt(discreminant)) / (2 * this.#coefPower2)
        }, 0) and (${
          (-this.#coefPower1 - Math.sqrt(discreminant)) / (2 * this.#coefPower2)
        }, 0)`
      );
    }
  }
  calculateValueAtPoint(x) {
    return (
      this.#coefPower2 * Math.pow(x, 2) +
      this.#coefPower1 * x +
      this.#coefPower0
    );
  }

  toString() {
    return `${this.#name}: ${this.#coefPower2}x² + ${this.#coefPower1}x + ${
      this.#coefPower0
    }`;
  }

  infoAboutParabola() {
    console.log(`${this}`);
    console.log(
      `vertex: (${this.#vertex[0].toFixed(2)}, ${this.#vertex[1].toFixed(2)})`
    );
  }

  parabolaValueAtPoint(x) {
    const value = this.calculateValueAtPoint(x);
    console.log(
      `parabola ${
        this.#name
      } at point x = ${x} takes value of y = ${value.toFixed(2)}`
    );
  }
}

try {
  const p1 = new Parabola("p1", 1, 2, 3);
  const p2 = new Parabola("p2", "1", 2, "3");

  console.log("created parabolas:");
  p1.infoAboutParabola();
  p1.parabolaValueAtPoint(1);
  p1.calculateZeroesAxisX();
  console.log();

  p2.infoAboutParabola();
  p2.parabolaValueAtPoint(2);
  console.log();

  console.log("parabolas are equal:", p1.areEqual(p2));
  console.log();

  const p3 = p1.add(p2);
  console.log("p1 + p2 =");
  p3.infoAboutParabola();
  p3.parabolaValueAtPoint(2);
  console.log();

  const p4 = p1.multiplyByNumber(6);
  console.log("p 1 * 6 =");
  p4.infoAboutParabola();
  console.log();

  const p5 = p4.subtract(p1);
  console.log("p4 - p1 =");
  p5.infoAboutParabola();
  console.log();

  p2.set(p3);
  console.log("p2 after setting it to p3:");
  p2.infoAboutParabola();
  console.log();
  
  console.log(p1 + " surikat");
  console.log();
} catch (error) {
  console.error("error:", error.message);
}
