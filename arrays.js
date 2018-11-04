var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(a, b) {
  c = [`${b}`, ...a]
  return c
}
