interface ObjectType {
  [key: string]: any
}

class Vector2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  equalsExactly(vector: ObjectType): boolean {
    return this.x === vector.x && this.y === vector.y;
  }

  equalsApproximately(vector: ObjectType, epsilon: number): boolean {
    return (
      Math.abs(this.x - vector.x) < epsilon && Math.abs(this.y - vector.y) < epsilon
    );
  }

  length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize() {
    const length = this.length();

    if (length === 0) {
      throw new Error('Cannot normalize vectors of length 0');
    }

    return new Vector2(this.x / length, this.y / length);
  }

  add(vector: ObjectType): Object {
    const x = this.x + vector.x;
    const y = this.y + vector.y;

    return new Vector2(x, y);
  }

  subtract(vector: ObjectType): Object {
    const x = this.x - vector.x;
    const y = this.y - vector.y;

    return new Vector2(x, y);
  }

  multiply(scalar: ObjectType): Object {
    const x = this.x * scalar.x;
    const y = this.y * scalar.y;

    return new Vector2(x, y);
  }

  distance(vector: ObjectType): number {
    const difference = vector.subtract(this);

    return difference.length();
  }

  dotProduct(vector: ObjectType): number {
    return this.x * vector.x + this.y * vector.y;
  }

  rotate(angleInRadians: number): Object {
    const ca = Math.cos(angleInRadians);
    const sa = Math.sin(angleInRadians);
    const x = ca * this.x - sa * this.y;
    const y = sa * this.x + ca * this.y;

    return new Vector2(x, y);
  }

  angleBetween(vector: ObjectType): number {
    return Math.atan2(vector.y, vector.x) - Math.atan2(this.y, this.x);
  }
}

export default Vector2;
