import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render link', () => {
    const expectedLink = '/trip/abc';
    const id = 'abc';
    const component = shallow( <TripSummary id={id} image='' name='' cost='' days={0} tags={[]} />);
    const renderLink = component.find('.link').prop('to');
    expect(renderLink).toEqual(expectedLink);
  });

  it('should pass correct src and alt to <img>', () => {
    const expectedSrc = './something.jpg';
    const expectedAlt = 'something';
    const component = shallow( <TripSummary id='' image={expectedSrc} name={expectedAlt} cost='' days={0} tags={[]}/>);
    const renderImgSrc = component.find('img').prop('src');
    const renderImgAlt = component.find('img').prop('alt');
    expect(renderImgSrc).toEqual(expectedSrc);
    expect(renderImgAlt).toEqual(expectedAlt);
  });

  it('should render name, cost and days', () => {
    const expectedName = 'Aga';
    const cost = '30000';
    const days = 10;
    const expectedCost =  `from ${cost}`;
    const expectedDays = `${days} days`;
    const component = shallow( <TripSummary id='' image='' name={expectedName} cost={cost} days={days} tags={[]} />);
    const renderName = component.find('h3').text();
    const renderDays = component.find('.details span').first().text();
    const renderCost = component.find('.details span').last().text();
    expect(renderName).toEqual(expectedName);
    expect(renderDays).toEqual(expectedDays);
    expect(renderCost).toEqual(expectedCost);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should pass on correct tags', () => {
    const tags = ['tag1', 'tag2', 'tag3'];
    const component = shallow( <TripSummary id='' image='' name='' cost='' days={0} tags={tags} />);
    const renderTag1 =  component.find('.tags span').first().text();
    const renderTag2 =  component.find('.tags span').at(1).text();
    const renderTag3 =  component.find('.tags span').last().text();
    expect(renderTag1).toEqual(tags[0]);
    expect(renderTag2).toEqual(tags[1]);
    expect(renderTag3).toEqual(tags[2]);
  });
  it('should crash if tags is empty', () => {
    const emptyTags = [];
    const component = shallow(<TripSummary id='' image='' name='' cost='' days={0} tags={emptyTags} />);
    const expectedDiv = component.find('div.tags');
    expect(expectedDiv.exists()).toEqual(false);
  });
});
