import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';


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

  const mockProps = {
    id: 'abc',
    name: 'Lorem',
    values: [
      {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
      {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
    ],
    required: false,
    currentValue: 'aaa',
    price: '50%',
    limits: {
      min: 0,
      max: 6,
    },
  };

  const mockPropsForType = {
    dropdown: {},
    icons: {},
    checkboxes: {currentValue: [mockProps.currentValue]},
    number: {currentValue: 1},
    text: {},
    date: {},
  };

  const testValue = mockProps.values[1].id;
  const testValueNumber = 3;

  for(let type in optionTypes){
    describe(`Component OrderOption with type=${type}`, () => {
      /* test setup */
      let component;
      let subcomponent;
      let renderedSubcomponent;
      let mockSetOrderOptions;

      beforeEach(() => {
        mockSetOrderOptions = jest.fn();
        component = shallow(
          <OrderOption
            type={type}
            setOrderOption = {mockSetOrderOptions}
            {...mockProps}
            {...mockPropsForType[type]}
          />
        );
        subcomponent = component.find(optionTypes[type]);
        renderedSubcomponent = subcomponent.dive();
      });

      /* common tests */
      it(`renders ${optionTypes[type]}`, () => {
        expect(subcomponent).toBeTruthy();
        expect(subcomponent.length).toBe(1);
      });

      /* type-specific tests */
      switch (type) {
        case 'dropdown': {
          it('contains select and options', () => {
            const select = renderedSubcomponent.find('select');
            expect(select.length).toBe(1);

            const emptyOption = select.find('option[value=""]').length;
            expect(emptyOption).toBe(1);

            const options = select.find('option').not('[value=""]');
            expect(options.length).toBe(mockProps.values.length);
            expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
            expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
          });

          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
            expect(mockSetOrderOptions).toBeCalledTimes(1);
            expect(mockSetOrderOptions).toBeCalledWith({ [mockProps.id]: testValue});
          });
          break;
        }
        case 'icons': {
          it('contains div.icon', () => {
            const icon = renderedSubcomponent.find('div.icon');
            expect(icon.length).toBe(1);
          });
          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('div.i').last().simulate('click');
            expect(mockSetOrderOptions).toBeCalledTimes(1);
            expect(mockSetOrderOptions).toBeCalledWith({ [mockProps.id]: testValue});
          });
          break;
        }
        case 'checkboxes': {
          it('contains checkbox', () => {
            const checkbox = renderedSubcomponent.find('div.checkboxes');
            expect(checkbox.length).toBe(1);
          });
          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find(`[id="${testValue}"]`).simulate('change', {currentTarget: {checked: true}});
            expect(mockSetOrderOptions).toBeCalledTimes(1);
            expect(mockSetOrderOptions).toBeCalledWith({[mockProps.id]: [mockProps.currentValue, testValue]});

          });
          break;
        }
        case 'number': {
          it('contains input', () => {
            const input = renderedSubcomponent.find('input');
            expect(input.length).toBe(1);
          });
          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValueNumber}});
            expect(mockSetOrderOptions).toBeCalledTimes(1);
            expect(mockSetOrderOptions).toBeCalledWith({ [mockProps.id]: testValueNumber});
          });

          break;
        }
        case 'text': {
          it('contains input', () => {
            const input = renderedSubcomponent.find('input.input');
            expect(input.length).toBe(1);
          });

          break;
        }
        case 'date': {
          it('should run setOrderOption function on change', () => {
            const datePicker = renderedSubcomponent.find(DatePicker);
            datePicker.props().onChange('12/12/2020');
            expect(mockSetOrderOptions).toBeCalledTimes(1);

          });

          break;
        }
      }
    });
  }
});
