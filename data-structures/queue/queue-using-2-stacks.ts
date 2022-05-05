class Queue {
  private inputStack: any[];
  private outputStack: any[];

  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  enqueue(item: any): void {
    this.inputStack.push(item);
  }

  dequeue(): any {
    this.outputStack = [];

    while(this.inputStack.length > 0) {
      this.outputStack.push(this.inputStack.pop());
    }

    if (this.outputStack.length > 0) {
      const top = this.outputStack.pop();

      this.inputStack = [];

      while(this.outputStack.length > 0) {
        this.inputStack.push(this.outputStack.pop());
      }

      return top;
    }
  }

  listIn(output: Function = (value: any) => console.log(value)): void {
    let i = 0;

    while(i < this.inputStack.length) {
      output(this.inputStack[i]);
      i++;
    }
  }

  listOut(output: Function = (value: any) => console.log(value)): void {
    let i = 0;

    while(k < this.outputStack.length) {
      output(this.outputStack[i]);
      i++;
    }
  }
}

export default Queue;
