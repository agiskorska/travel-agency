import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption type='' name='' />);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  const optionTypes = {
    dropdown: 'OrderOptionDropdown',
    icons: 'OrderOptionIcons',
    checkboxes: 'OrderOptionCheckboxes',
    number: 'OrderOptionNumber',
    text: 'OrderOptionText',
    date: 'OrderOptionDate',
  };

  for(let type in optionTypes){
    describe(`Component OrderOption with type=${type}`, () => {
      /* test setup */
      let component;

      beforeEach(() => {
        component = shallow(
          <OrderOption
            type={type}
          />
        );
      });


      /* common tests */
      it('passes dummy test', () => {
        expect(1).toBe(1);
        console.log(component.debug());
      });

      /* type-specific tests */
      switch (type) {
        case 'dropdown': {
          /* tests for dropdown */
          break;
        }
      }
    });
  }
});
