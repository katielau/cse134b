import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import loginPage from './loginPage';


describe('loginPage via Enzyme', () => {
  it('renders h1, nav', () => {
    const wrapper = shallow(<home2Page/>);
    expect(wrapper.find('h1'));
	expect(wrapper.find('nav'));
		
  });

  it('renders right panel', () => {
    const wrapper = shallow(<home2Page/>);
    expect(wrapper.find('h2'));
    expect(wrapper.find('form'));
  });

  it('renders left panel', () => {
    const wrapper = shallow(<home2Page/>);
    expect(wrapper.find('h3'));
    expect(wrapper.find('form'));
    expect(wrapper.find('ul'));	
  });
});