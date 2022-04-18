class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    if (this.empty()) throw new Error('Queue is Empty');

    return this.queue.shift();
  }

  length() {
    return this.queue.length;
  }

  peek() {
    if (this.empty()) throw new Error('Queue is Empty');

    return this.queue[0];
  }

  view(output = value => console.log(value)) {
    output(this.queue);
  }

  empty() {
    return this.queue.length === 0;
  }
}
