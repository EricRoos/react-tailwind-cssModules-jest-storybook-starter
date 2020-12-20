import React from 'react';
import renderer from 'react-test-renderer';
import TestComponent from './test-component';

it('renders correctly', () => {
  const tree = renderer
    .create(<TestComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

