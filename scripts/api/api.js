export default class API {
  /**
   *
   * @param {string} url
   */

  constructor(url) {
    this.url = url;
  }

  async getPhotographersProfils() {
    const response = await fetch(this.url);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message ||
          "Unable to retrieve photographers data from Api!"
      );
      throw error;
    }

    const { photographers } = responseData;
    return photographers;
  }

  async getMedias() {
    const response = await fetch(this.url);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Unable to retrieve medias data from Api!"
      );
      throw error;
    }

    const { media } = responseData;
    return media;
  }
}
