import React from 'react';
import expect from 'expect';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import ArtistPage from './ArtistPage';



describe ('Artist Page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ArtistPage />, div);
  });

  it('check h2, h3 text', () => {
    const artist = shallow(<ArtistPage />);
    expect(artist.find('h2').text()).toEqual('CatLover99');
  });

  
});