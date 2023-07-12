const {add, wrong_add} = require('../add.js')
const assert = require('assert')

test_id = 1

if (false) {
    let result = add(1,3)

    let expected = 4

    assert.equal(result, expected)

    result = wrong_add(1,3)

    assert.equal(result, expected, 'Add function does not work properly')

}


describe('The add function', () => {
    
    it('adds two numbers', () => {

        const actual = add(1, 3)

        const expected = 4

        assert.equal(actual, expected)
    })

    it('adds two numbers wrong', () => {

        result = wrong_add(1,3)

        const expected = 4
    
        assert.notEqual(result, expected, 'Add function does not work properly')
    })
}

)