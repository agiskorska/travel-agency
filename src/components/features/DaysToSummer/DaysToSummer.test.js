import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
});
