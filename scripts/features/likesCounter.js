export default class LikesCounter {
  /**
   *
   * @param {number} mediaCount
   * @param {number} id
   */

  constructor(mediaCount, id) {
    this.id = id;
    this.mediaCount = mediaCount;
    this.totalLikes = null;
  }

  update(action) {
    const mediaLikes = document.querySelector(`[data-id="${this.id}"]`);
    this.totalLikes = document.querySelector(".likes").textContent;
    if (action === "LIKE") {
      this.mediaCount++;
      this.totalLikes++;
    } else {
      this.mediaCount--;
      this.totalLikes--;
    }
    mediaLikes.querySelector(".media_count").textContent = this.mediaCount;
    document.querySelector(".likes").textContent = this.totalLikes;
  }
}
