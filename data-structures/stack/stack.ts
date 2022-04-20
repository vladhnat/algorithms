const Stack: Function = (function(): Function {
  function Stack(): void {
    const top: number = 0;
    const stack: Array<any> = [];

    this.top = top;
    this.stack = stack;
  }

  Stack.prototype.push = function(value: any): void {
    this.stack[this.top] = value;
    this.top++;
  }

  Stack.prototype.pop = function(): any {
    if (this.top === 0) return 'Stack is Empty';

    this.top--;

    const result: any = this.stack[this.top];
    
    this.stack = this.stack.splice(0, this.top);

    return result;
  }

  Stack.prototype.size = function(): number {
    return this.top;
  }

  Stack.prototype.peek = function(): any {
    return this.stack[this.top - 1];
  }

  Stack.prototype.view = function(output: Function = (value: any) => console.log(value)): void {
    for (let i = 0; i < this.top; i++) {
      output(this.stack[i]);
    }
  }

  return Stack;
}());

export default Stack;
