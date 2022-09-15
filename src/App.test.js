import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './pages/Home';
import Calculator from './components/Calculator';
import Quote from './pages/Quote';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Math Magicians');
  expect(linkElement).toBeInTheDocument();
});

test('Home router', () => {
  const hm = render(<Home />);
  expect(hm).toMatchSnapshot();
});
test('Calculator router', () => {
  const hm = render(<Calculator />);
  expect(hm).toMatchSnapshot();
});

test('Quote router', () => {
  const hm = render(<Quote />);
  expect(hm).toMatchSnapshot();
});

// Simulate user interaction test
test('Dom Calculator', () => {
  render(<Calculator />);  
  userEvent.click(screen.getByText('9'));
  userEvent.click(screen.getByText('*'));
  userEvent.click(screen.getByText('2'));
  userEvent.click(screen.getByText('='));
  // 12 + 3 = 15  <- on display
  expect(screen.getByTestId('display')).toHaveTextContent('18');
});
