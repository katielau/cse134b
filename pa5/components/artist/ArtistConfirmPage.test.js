import React from 'react';
import expect from 'expect';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import ArtistConfirmPage from './ArtistConfirmPage';


describe ('Artist Confirm Page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ArtistConfirmPage />, div);
  });
  it('check h2 text', () => {
    const confirm = shallow(<ArtistConfirmPage />);
    expect(confirm.find('h2').text()).toEqual('Your changes have been saved.');
  });
});

