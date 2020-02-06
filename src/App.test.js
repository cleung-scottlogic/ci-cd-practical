import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from './enzyme'
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('sum two numbers', () => {
  const wrapper = shallow(<App />);
  
  expect(wrapper.find('#firstValue').exists()).toBeTruthy();
})
