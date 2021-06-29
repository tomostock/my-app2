import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

it('Page snapshot testing', () => {
  const component = renderer.create(<App />);
  expect(component).toMatchSnapshot();
});
