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

  fire(action) {
    console.log("test observer");
    this.observers.forEach((observer) => observer.update(action));
  }
}
