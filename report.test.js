const { sortPages } = require("./report")
const { test, expect } = require("@jest/globals") 

test('sortPages 2 pages', ()=>{
   const input = {
    'https://freecodecamp.org': 5,
    'https://freecodecamp.org/path': 3
   }
   const actual = sortPages(input)
   const expected = [
    ['https://freecodecamp.org', 5],
    ['https://freecodecamp.org/path', 3]
   ]
   expect(actual).toEqual(expected)
})

test('sortPages multiple pages', ()=>{
  const input = {
   'https://freecodecamp.org': 15,
   'https://freecodecamp.org/path': 1,
   'https://freecodecamp.org/path1': 4,
   'https://freecodecamp.org/path2': 7,
   'https://freecodecamp.org/path3': 3,
  }
  const actual = sortPages(input)
  const expected = [
   ['https://freecodecamp.org', 15],
   ['https://freecodecamp.org/path2', 7],
   ['https://freecodecamp.org/path1', 4],
   ['https://freecodecamp.org/path3', 3],
   ['https://freecodecamp.org/path', 1]
  ]
  expect(actual).toEqual(expected)
})