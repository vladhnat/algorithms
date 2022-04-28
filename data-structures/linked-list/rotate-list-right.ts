interface ObjectType {
  [key: string]: any
}

function main(): string {
  let head: any = '';
  let k: any = '';
  let i: number = 0;
  let current = head;

  while (current) {
    i++;
    current = current.next;
  }

  k %= i;
  current = head;

  let prev: any = null;

  while (k--) {
    if (!current || !current.next) {
      return current;
    } else {
      while (current.next) {
        prev = current;
        current = current.next;
      }

      prev.next = current.next;
      current.next = head;
      head = current;
    }
  }

  return head;
}

main();
