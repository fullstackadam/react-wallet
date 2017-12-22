import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

test('should render Header component correctly', () => {
  const wrapper = new shallow(<Header />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});