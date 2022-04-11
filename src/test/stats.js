exports.max = numbers => Math.max(...numbers);

exports.min = numbers => Math.min(...numbers);

exports.avg = numbers =>
    numbers.reduce(
        (acc, current, index, {length}) => acc + current / length, 0
    );

exports.sort = numbers => numbers.sort((a, b) => a - b);

exports.median = numbers => {
    const middle = Math.floor(numbers.length / 2);

    if (numbers.length % 2) {
        return numbers[middle];
    }

    return (numbers[middle - 1] + numbers[middle]) / 2;
}