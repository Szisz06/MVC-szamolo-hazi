import Model from "../model/model.js";
import View from "../view/view.js";

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    const szam1 = this.model.szam1;
    const szam2 = this.model.szam2;
    const eredmeny = this.model.osszead();
    const html = `${szam1} + ${szam2} = ${eredmeny}`;
    this.view.container.innerHTML = html;
  }
}

export default Controller;
