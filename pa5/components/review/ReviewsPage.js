import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as reviewActions from '../../actions/courseActions';
import ReviewList from './ReviewList';
import {browserHistory} from 'react-router';

class ReviewsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddReviewPage = this.redirectToAddReviewPage.bind(this);
  }

  reviewRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddReviewPage() {
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;

    return (
      <div>
        <h1>Reviews</h1>
        <input type="submit"
               value="Add Review"
               className="btn btn-primary"
               onClick={this.redirectToAddReviewPage}/>
        <ReviewList courses={courses}/>
      </div>
    );
  }
}

ReviewsPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(reviewActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsPage);
