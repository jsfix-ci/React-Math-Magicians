import operate from './operate';

describe('Unit Test For operate', () => {
  test('test for subtracting numbers', () => {
    const num1 = 35;
    const num2 = 15;
    const operator = '-';
    const result = operate(num1, num2, operator);
    expect(result).toBe('20');
  });

  test('test for adding numbers', () => {
    const num1 = 15;
    const num2 = 15;
    const operator = '+';
    const result = operate(num1, num2, operator);
    expect(result).toBe('30');
  });

  test('test for multiplying numbers', () => {
    const num1 = 5;
    const num2 = 15;
    const operator = 'x';
    const result = operate(num1, num2, operator);
    expect(result).toBe('75');
  });

  test('test for dividing numbers', () => {
    const num1 = 35;
    const num2 = 7;
    const operator = '÷';
    const result = operate(num1, num2, operator);
    expect(result).toBe('5');
  });
});