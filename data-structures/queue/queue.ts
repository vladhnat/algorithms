class Queue {
  queue: Array<any> = [];

  enqueue(item: any): void {
    this.queue.push(item);
  }

  dequeue(): number {
    if (this.empty()) throw new Error('Queue is Empty');

    return this.queue.shift();
  }

  length(): number {
    return this.queue.length;
  }

  peek(): any {
    if (this.empty()) throw new Error('Queue is Empty');

    return this.queue[0];
  }

  view(output = value => console.log(value)): void {
    output(this.queue);
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}
