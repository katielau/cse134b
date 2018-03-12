import React from 'react';
import expect from 'expect';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import AnimalHitsPage from './AnimalHitsPage';



describe ('Animal Hits Page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AnimalHitsPage />, div);
  });

  it('check h2 text', () => {
    const hits = shallow(<AnimalHitsPage />);
    expect(hits.find('h2').text()).toEqual('CatLover99 Works under the Animal tag');
  });

  it('Click back to artist page', () => {
    const hits = shallow(<AnimalHitsPage />);
    const retButton = hits.find('input').last();
    expect(retButton.prop('type')).toBe('submit');
    expect(retButton.prop('value')).toBe('Back to CatLover99');
  });
});