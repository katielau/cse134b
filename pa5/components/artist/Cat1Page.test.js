import React from 'react';
import expect from 'expect';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import Cat1Page from './Cat1Page';

describe ('Cat1 Page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Cat1Page />, div);
  });

  //cat1
  it('submitting text area', () => {
    const handleSubmit = expect.spyOn(Cat1Page.prototype, 'handleSubmit');
    const handleChange = expect.spyOn(Cat1Page.prototype, 'handleChange');
    
    const cat1 = mount(<Cat1Page />);

    //edit textarea and trigger 
    expect(handleChange).toNotHaveBeenCalled();
    cat1.find('textarea').last().simulate('change', { target: { value: 'foo' } })
    expect(handleChange).toHaveBeenCalled();

    //submit and erase
    expect(handleSubmit).toNotHaveBeenCalled();
    cat1.find('form').last().simulate('submit');
    expect(handleSubmit).toHaveBeenCalled();
    expect(cat1.find('textarea').last().prop('value')).toBe('');

    //check submit button 
    expect(cat1.find('input').last().prop('type')).toBe('submit');
    expect(cat1.find('input').last().prop('value')).toBe('Submit');

  });
});


