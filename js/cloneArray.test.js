const { expect } = require("@jest/globals")
const  cloneArray = require("./cloneArray")  

test("properly clone the array", ()=>{
    const array = [1,2,3]
    expect(cloneArray(array)).toEqual(array)
})