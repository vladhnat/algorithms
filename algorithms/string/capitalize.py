from string import ascii_lowercase, ascii_uppercase

def capitalize(value: str) -> str:
  """
  This function will capitalize the first letter of a value or a word
  >>> capitalize("hello world")
  'Hello world'
  >>> capitalize("123 hello world")
  '123 hello world'
  >>> capitalize(" hello world")
  ' hello world'
  >>> capitalize("a")
  'A'
  >>> capitalize("")
  ''
  """
  if not value:
    return ""
  lower_to_upper = {lc: uc for lc, uc in zip(ascii_lowercase, ascii_uppercase)}
  return lower_to_upper.get(value[0], value[0]) + value[1:]

if __name__ == "__main__":
  from doctest import testmod

  testmod()
  