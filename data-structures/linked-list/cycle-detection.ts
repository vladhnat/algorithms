const cycleDetection = (): boolean => {
  const head: string = '';
  let fast: any = head;
  let slow: any = head;

  while(fast != null && fast.next != null && slow != null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }

  return false;
};

export default cycleDetection;
