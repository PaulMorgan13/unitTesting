const { expect } = require("@jest/globals")
const subtract = require("./subtract")  

test("checking if subtraction works", () =>{
    expect(subtract(10,2)).toBeLessThanOrEqual(8)
})