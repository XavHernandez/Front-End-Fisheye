import IndexPage from "../pages/index.js";
import PhotographerPage from "../pages/photographer.js";

export default class PagesFactory {
  /**
   *
   * @param {string} pathname
   */

  constructor(pathname) {
    console.log(pathname);
    if (pathname === "/" || pathname === "/index.html") {
      return IndexPage.render();
    } else if (pathname === "/photographer.html") {
      return PhotographerPage.render();
    } else {
      const error = "404 error : Unrecognized URL";
      throw error;
    }
  }
}
