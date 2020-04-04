function generateExpression(multiplicand, multiplier) {
    const separator = multiplicand == multiplier ? '' : '\t';

    return `${multiplicand}*${multiplier}=${multiplicand*multiplier}${separator}`;
}

function generateLine(lineStart, lineEnd) {
    let result = "";

    for (let index = lineStart; index <= lineEnd; index++) {
        result = result + generateExpression(index, lineEnd);
    }

    return result;
}

function generateAllLines(start, end) {
    let result = "";
    for(let index=start; index<=end; index++ ) {
        let lineSeparator = index == end ? '' : '\n';

        result += generateLine(start, index) + lineSeparator;
    }

    return result;
}

function isValid(start, end) {
    const MIN = 1;
    const MAX = 1000;
    return start <= end && start >= MIN && end <= MAX;
}

module.exports = {
    generateExpression,
    generateLine,
    generateAllLines,
    isValid
};
