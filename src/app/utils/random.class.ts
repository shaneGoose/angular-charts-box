export class RandomGenerator {
  min: number;
  max: number;

  constructor (min?: number, max?: number) { 
    if (!min) { console.log(`Falsy of ${min}`); }

    this.min = min ? Math.floor(min) : 0;
    this.max = max ? Math.ceil(max) : Number.MAX_SAFE_INTEGER;

    this.min = this.min < this.max ? this.min : 0;
    this.max = this.max > this.min ? this.max : Number.MAX_SAFE_INTEGER;
   }

  public getRandomPositiveInt(): number {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
}