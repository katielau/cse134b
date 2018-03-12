import React from 'react';
import expect from 'expect';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import ArtistEditPage from './ArtistEditPage';

describe ('Artist Edit Page', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<ArtistEditPage />, div);
    });
  
    //artist
    it('submitting text area', () => {
      const handleChange = expect.spyOn(ArtistEditPage.prototype, 'handleChange');    
      const artist = mount(<ArtistEditPage />);
  
      //edit textarea and trigger 
      expect(handleChange).toNotHaveBeenCalled();
      artist.find('textarea').first().simulate('change', { target: { value: 'foo' } })
      expect(handleChange).toHaveBeenCalled();
    });


    //upload photo
    it('uploading a photo and triggering onChange', () => {
      const onChange = expect.spyOn(ArtistEditPage.prototype, 'onChange1');
      const artist = mount(<ArtistEditPage />);

      expect(onChange).toNotHaveBeenCalled();
      artist.find('input').first().simulate('change');
      expect(onChange).toHaveBeenCalled();
    });

    //delete photo photo
    it('deleting photo', () => {
      const handleDelete = expect.spyOn(ArtistEditPage.prototype, 'handleDelete3');
      const artist = mount(<ArtistEditPage />);
      
      expect(handleDelete).toNotHaveBeenCalled();
      artist.find('form').last().simulate('submit');
      expect(handleDelete).toHaveBeenCalled();
    });

    //check profile photo button 
    it('check a button', () => {   
      const artist = mount(<ArtistEditPage />);
      expect(artist.find('input').first().prop('id')).toBe('uploadedProfPic');
      expect(artist.find('input').first().prop('type')).toBe('file');
    });
});