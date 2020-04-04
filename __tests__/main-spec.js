const multiplyTable= require("../main");


describe('generate multiply table: ', () => {
describe ('generate expression', () => {
  it ('should generate string of multiply expression for given multiplicand and multiplier', () => {
    // Given
    const multiplicand = 1;
    const multiplier = 2;

    // When
    const expression = multiplyTable.generateExpression(multiplicand, multiplier);

    // Then
    expect(expression).toBe('1*2=2\t');
  });
});

describe ('generate line', () => {
  it ('should generate one line given lineStart and lineEnd with same value', () => {
    // Given
    const lineStart = 2;
    const lineEnd = 2;

    // When
    const line = multiplyTable.generateLine(lineStart, lineEnd);

    // Then
    expect(line).toBe('2*2=4');
  });

  it ('should generate one line with multiple expressions given lineStart and lineEnd with different values', () => {
    // Given
    const lineStart = 2;
    const lineEnd = 3;

    // When
    const line = multiplyTable.generateLine(lineStart, lineEnd);

    // Then
    expect(line).toBe('2*3=6\t3*3=9');
  });
});

describe ('generate all lines', () => {
  it ('should generate all lines given start and end with same value', () => {
    // Given
    const start = 2;
    const end = 2;

    // When
    const table = multiplyTable.generateAllLines(start, end);

    // Then
    expect(table).toBe('2*2=4');
  });

  it ('should generate all lines given start and end', () => {
    // Given
    const start = 2;
    const end = 4;

    // When
    const table = multiplyTable.generateAllLines(start, end);

    // Then
    expect(table).toBe('2*2=4\n2*3=6\t3*3=9\n2*4=8\t3*4=12\t4*4=16');
  });
});

describe ('isValid', () => {
  it ('should return true given start and end are in range and start smaller than end', () => {
    // Given
    const start = 1;
    const end = 2;

    // When
    const isValid = multiplyTable.isValid(start, end);

    // Then
    expect(isValid).toBeTruthy();
  });

  it ('should return false given start and end are in range but start greater than end', () => {
    // Given
    const start = 2;
    const end = 1;

    // When
    const isValid = multiplyTable.isValid(start, end);

    // Then
    expect(isValid).toBeFalsy();
  });

  it ('should return false given start is out of range and end is in range', () => {
    // Given
    const start = 0;
    const end = 1;

    // When
    const isValid = multiplyTable.isValid(start, end);

    // Then
    expect(isValid).toBeFalsy();
  });

  it ('should return false given start is in range and end is out of range', () => {
    // Given
    const start = 1;
    const end = 1001;

    // When
    const isValid = multiplyTable.isValid(start, end);

    // Then
    expect(isValid).toBeFalsy();
  });

  it ('should return false given start and end are out of range', () => {
    // Given
    const start = -1;
    const end = 1001;

    // When
    const isValid = multiplyTable.isValid(start, end);

    // Then
    expect(isValid).toBeFalsy();
  });
});
});
