import PagesFactory from "../scripts/factories/pagesFactory.js";

class App {
  constructor() {
    this.pathname = window.location.pathname;
  }

  init() {
    new PagesFactory(this.pathname);
  }
}

const app = new App();
app.init();
