const {add, wrong_add} = require('../add.js')

describe('The add function', () => {
    
    it('adds two numbers', () => {

        const actual = add(1, 3)

        const expected = 4

        expect(actual).toBe(expected)
    })

    it('adds two numbers', () => {
        const actual = wrong_add(1, 3)
        const expected = 4

        expect(actual).not.toBe(expected)
    })
})