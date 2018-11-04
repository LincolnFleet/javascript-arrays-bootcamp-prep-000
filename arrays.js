var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(a, b) {
  c = [`${b}`, ...a]
  return c
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  a.unshift(`${b}`)
  return a
}

function addElementToEndOfArray(a, b) {
  c = [...a, `${b}`]
  return c
}

function destructivelyAddElementToEndOfArray(a, b) {
  a.push(`${b}`)
  return a
}

function accessElementInArray(a, b) {
  return a[b]
}

