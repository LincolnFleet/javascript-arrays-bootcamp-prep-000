var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(a, b) {
  c = [`${b}`, ...a]
  return c
}

function destructivelyAddElementToEndOfArray(a, b) {
  a.unshift(`${b}`)
  return a
}
