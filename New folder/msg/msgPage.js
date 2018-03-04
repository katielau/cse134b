import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

class msgPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.done = this.done.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.state = {
      v1: ""
    }
  }
  
  done(db) {
    const temp = document.getElementById(db).innerHTML;
    document.getElementById(db).innerHTML = "<strike>" + temp + "</strike>";
  }

  handleSubmit(event){
    event.preventDefault();
	const temp = document.getElementById("msgs").innerHTML;
    document.getElementById("msgs").innerHTML = temp + "<u>BUYER</u><br />" + event.target.newMsg.value;
	event.target.newMsg.value = "";
  }

  //nav bar stuff
  home(){
    browserHistory.push({
      pathname: '/home2',
      state: {username: this.props.location.state.username, login: this.props.location.state.login, logout: this.props.location.state.logout, msg: this.props.location.state.msg}
    });
  }

  login(){
    browserHistory.push({
      pathname: this.props.location.state.login,
      state: {username: this.props.location.state.username, login: this.props.location.state.login, logout: this.props.location.state.logout, msg: this.props.location.state.msg}
    });
  }

  logout(){
    browserHistory.push({
      pathname: '/login',
      state: {username: "Login", login: "/login", logout: "", msg: ""}
    });
  }

  msg(){
    browserHistory.push({
      pathname: '/msg',
      state: {username: this.props.location.state.username, login: this.props.location.state.login, logout: this.props.location.state.logout, msg: this.props.location.state.msg}
    });
  }

  render() {
    return (
      <div className="main">
        <div className="page">
          <div className="header">
            <h1>ARTC</h1>
          </div>

          <div className="topnav" id="myTopnav">
            <Link to="/home2" onClick={this.home}>Home</Link>
            <Link to="/login" onClick={this.logout}>Logout</Link>
          </div>

          <div className="content">
            <div className="right-panel">
              <h2>Messages</h2>
              <br />
              <h4 id="msgs">
              <u>BUYER</u>
                <br />
                Hello!
                <br />
                <br />
                <u>ARTIST</u>
                <br />
                Hi there!
                <br />
                <br />
              </h4>
              <form onSubmit={this.handleSubmit}>
                <input type="text" id="newMsg" name="newMsg" />
                <button>Send</button>
              </form>
            </div>    
            <div className="left-panel">
              <div className="left-row1">              
                <nav>
                  <ul>
                    <li><br />Timeframe = 10 days</li>
                    <li><br />Progress</li>
                    <li>
                      <button id="b1" onClick={() => this.done("b1")}>
                        Buyer sent $
                      </button>
                    </li>
                    <li>
                      <button id="b2" onClick={() => this.done("b2")}>
                        Artist sent sketch
                      </button>
                    </li>
                    <li>
                      <button id="b3" onClick={() => this.done("b3")}>
                        Sketch approved
                      </button>
                    </li>
                    <li>
                      <button id="b4" onClick={() => this.done("b4")}>
                        Buyer sent $
                      </button>
                    </li>
                    <li>
                      <button id="b5" onClick={() => this.done("b5")}>
                        Artist sent final
                      </button>
                    </li>
                    <li>
                      <button id="b6" onClick={() => this.done("b6")}>
                        Artist complete
                      </button>
                    </li>
                    <li>
                      <button id="b7" onClick={() => this.done("b7")}>
                        Buyer complete
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default msgPage;
