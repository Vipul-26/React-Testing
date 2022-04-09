import React from 'react';
import App from './App';
import { shallow } from '../enzyme.config';


test('render app', () => {
  const wrapper = shallow(<App />);
  const div = wrapper.find('div');
  expect(div.length).toBe(1);
});

