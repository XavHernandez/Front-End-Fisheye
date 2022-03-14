export default class LikesObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  fire(action, mediaId) {
    this.observers.find((observer) => observer.id === mediaId).update(action);
  }
}
