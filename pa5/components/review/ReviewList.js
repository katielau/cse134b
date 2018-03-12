import React, {PropTypes} from 'react';
import ReviewListRow from './ReviewListRow';

const ReviewList = ({courses}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <ReviewListRow key={course.id} course={course}/>
      )}
      </tbody>
    </table>
  );
};

ReviewList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default ReviewList;
