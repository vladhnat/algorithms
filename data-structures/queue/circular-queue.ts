class CircularQueue {
  queue: any[];
  front: number;
  rear: number;
  maxLength: number;

  constructor(maxLength: number) {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.maxLength = maxLength;
  }

  enqueue(value: any): void {
    if (this.checkOverflow()) return;
    if (this.checkEmpty()) {
      this.front += 1;
      this.rear += 1;
    } else {
      if (this.rear === this.maxLength) {
        this.rear = 1;
      } else this.rear += 1;
    }
  }

  dequeue(): any {
    if (this.checkEmpty()) return
    
    const y = this.queue[this.front];

    this.queue[this.front] = '*';

    if (!this.checkSingleElement()) {
      if (this.front === this.maxLength) {
        this.front = 1;
      } else {
        this.front += 1;
      }
    }

    return y;
  }

  checkEmpty(): boolean {
    if (this.front === 0 && this.rear === 0) return true;
  }

  checkSingleElement(): boolean {
    if (this.front === this.rear && this.rear !== 0) {
      this.front = this.rear = 0;
      return true;
    }
  }

  checkOverflow(): boolean {
    if (
      (this.front === 1 && this.rear === this.maxLength) ||
      (this.front === this.rear + 1)
    ) {
      return true
    }
  }

  display(output: Function = (value: any) => console.log(value)): void {
    for (let index = 1; index < this.queue.length; index++) {
      output(this.queue[index]);
    }
  }

  length(): number {
    return this.queue.length - 1;
  }

  peek(): any {
    return this.queue[this.front];
  }
}

export default CircularQueue;
