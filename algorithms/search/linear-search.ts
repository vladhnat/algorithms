const Search = (arr: any[], key: number): number => {
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === key) return i;
  }

  return -1;
};

const SearchArray = (
  num: number,
  arr: any[],
  output: Function = (v: string) => console.log(v)
): void => {
  const position = Search(arr, num);

  if (position !== -1) {
    output(`The element was found at ${position + 1}`);
  } else {
    output('The element not found');
  }
};

export default {
  Search,
  SearchArray,
};
