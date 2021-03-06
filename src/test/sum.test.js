const {sumOf, sum} = require("./sum");

test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
})

describe('sum', () => {
    it('calculates 1 + 2', function () {
        expect(sum(1, 2)).toBe(3);
    });

    it('calculates all numbers', function () {
        const array = [1, 2, 3, 4, 5];

        expect(sumOf(array)).toBe(15);
    });
})