class Model {
  constructor() {
    this.szam1 = Math.floor(Math.random() * 10);
    this.szam2 = Math.floor(Math.random() * 10);
  }

  osszead() {
    return this.szam1 + this.szam2;
  }
}

export default Model;
