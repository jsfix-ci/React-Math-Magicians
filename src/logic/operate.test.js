import operate from './operate';

describe('Testing the operate', () => {
  test('test subscription', () => {
    const firstNumber = 20;
    const secondNumber = 1;
    const operator = '-';
    const result = operate(firstNumber, secondNumber, operator);
    expect(result).toBe('19');
  });

  test('test addition', () => {
    const firstNumber = 4;
    const secondNumber = 3;
    const operator = '+';
    const result = operate(firstNumber, secondNumber, operator);
    expect(result).toBe('7');
  });

  test('test multiplication', () => {
    const firstNumber = 3;
    const secondNumber = 4;
    const operator = 'x';
    const result = operate(firstNumber, secondNumber, operator);
    expect(result).toBe('12');
  });

  test('test division', () => {
    const firstNumber = 8;
    const secondNumber = 2;
    const operator = '÷';
    const result = operate(firstNumber, secondNumber, operator);
    expect(result).toBe('4');
  });
});
