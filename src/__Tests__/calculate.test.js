import chai from 'chai';
import calculate from '../logic/calculate';

chai.config.truncateThreshold = 0;
const { expect } = chai;

function pressedButtons(buttons) {
  const value = {};
  buttons.forEach((button) => {
    Object.assign(value, calculate(value, button));
  });

  Object.keys(value).forEach((key) => {
    if (value[key] === null) {
      delete value[key];
    }
  });
  return value;
}
function expectedButtons(buttons, expectations) {
  expect(pressedButtons(buttons)).to.deep.equal(expectations);
}
function test(buttons, expectations, only = false) {
  const func = only ? it.only : it;
  func(`buttons ${buttons.join('')}->${JSON.stringify(expectations)}`, () => {
    expectedButtons(buttons, expectations);
  });
}
describe('calculate', () => {
  test(['6'], { next: '6' });
});
