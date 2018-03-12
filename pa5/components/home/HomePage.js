import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import '../../style1/styles.css';

class HomePage extends React.Component {
  index(){
    browserHistory.push({
      pathname: '/home2',
      state: {username: "Login", login: "/login", logout: "", msg: ""}
    });
  }
  
  render() {
    return (
      <div className="main">
        <div className="page">
          <div className="header">
            <h1 onClick={this.index}>Click to enter ARTC</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
