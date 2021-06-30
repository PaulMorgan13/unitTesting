const { expect } = require("@jest/globals")
const sum = require("./sum")    

test("test if add corectly", ()=>{  
    expect(sum(8,8)).toBe(16)

})
     

test("test if print works", ()=>{
    expect(printHi()).toMatch("hi there")
})
