const Stack = (function() {
  function Stack() {
    this.top = 0;
    this.stack = [];
  }

  Stack.prototype.push = function(value) {
    this.stack[this.top] = value;
    this.top++;
  }

  Stack.prototype.pop = function() {
    if (this.top === 0) return 'Stack is Empty';

    this.top--;

    const result = this.stack[this.top];
    
    this.stack = this.stack.splice(0, this.top);

    return result;
  }

  Stack.prototype.size = function() {
    return this.top;
  }

  Stack.prototype.peek = function() {
    return this.stack[this.top - 1];
  }

  Stack.prototype.view = function(output = value => console.log(value)) {
    for (let i = 0; i < this.top; i++) {
      output(this.stack[i]);
    }
  }

  return Stack;
}());

export default Stack;
