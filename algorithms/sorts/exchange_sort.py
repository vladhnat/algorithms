def exchange_sort(numbers: list[int]) -> list[int]:
  """
  >>> exchange_sort([5, 4, 3, 2, 1])
  [1, 2, 3, 4, 5]
  >>> exchange_sort([-1, -2, -3])
  [-3, -2, -1]
  >>> exchange_sort([1, 2, 3, 4, 5])
  [1, 2, 3, 4, 5]
  >>> exchange_sort([0, 10, -2, 5, 3])
  [-2, 0, 3, 5, 10]
  >>> exchange_sort([])
  []
  """
  number_length = len(numbers)
  for i in range(number_length):
      for j in range(i + 1, number_length):
        if numbers[j] < numbers[i]:
          numbers[i], numbers[j] = numbers[j], numbers[i]
  return numbers

if __name__ == "__main":
  user_input = input("Enter numbers separeted by a coma:\n").strip()
  unsorted = [int(item) for item in user_input.split(",")]
  print(exchange_sort(unsorted))
