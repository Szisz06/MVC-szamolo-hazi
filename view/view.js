class View {
  constructor() {
    this.container = document.querySelector(".tarolo");
  }

  htmlOsszealit() {
    this.container.innerHTML = `${eredmeny}`;
  }
}

export default View;
