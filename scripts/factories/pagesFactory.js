import IndexPage from "../pages/index.js";
import PhotographerPage from "../pages/photographer.js";

export default class PagesFactory {
  /**
   *
   * @param {string} pathname
   */

  constructor(pathname) {
    if (
      pathname === "/" ||
      pathname === "/index.html" ||
      pathname === "/Front-End-Fisheye/" ||
      pathname === "/Front-End-Fisheye/index.html"
    ) {
      return IndexPage.render();
    } else if (pathname === "/Front-End-Fisheye/photographer.html") {
      return PhotographerPage.render();
    } else {
      const error = "404 error : Unrecognized URL";
      throw error;
    }
  }
}
