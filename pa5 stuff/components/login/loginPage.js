import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import '../../style1/styles.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';

class loginPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.searchArtwork = this.searchArtwork.bind(this);
    this.searchArtists = this.searchArtists.bind(this);
    this.loginn = this.loginn.bind(this);
    this.createAcc = this.createAcc.bind(this);
    this.type = this.type.bind(this);
    this.price = this.price.bind(this);
    this.time = this.time.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    this.state = {
      type: "",
      price: "",
      time: "",
      usernames: [],
      passwords: []
    };  
  }

  validateLogin(u, p){
    const temp = this.props.users;
    var users = [];
    var passes = [];
    for (var i = 0; i < temp.length; i++) {
      if(temp[i].username == u && temp[i].password == p){
        return true;
      }
    }
  }
  
  loginn(event){
    const user = event.target.username.value;
    const pass = event.target.password.value;    
    const valid = this.validateLogin(user, pass);

    if(valid){
      this.props.state.login(event, user, pass);
      browserHistory.push({
        pathname: '/home2'
      });
    }
    else {
      alert("Incorrect username or password");
    }
  }

  createAcc(){
    browserHistory.push({pathname: '/createAccount'});
  }
  
  searchArtwork(event) {
    const searchQuery = event.target.searchQ.value;
    this.props.state.searchArt(searchQuery);
    browserHistory.push({pathname: '/artworkResults'});
  }

  searchArtists(event) {
    this.props.state.searchArtist(this.state.type, this.state.price, this.state.time);
    browserHistory.push({pathname: '/artistResults'});
  }

  type(event){
    this.setState({type: event.target.value});
  }

  price(event){
    this.setState({price: event.target.value});
  }

  time(event){
    this.setState({time: event.target.value});
  }
  
  render() {
    const {users} = this.props;
    return (
      <div className="main">
        <div className="page">
          <div className="header">
            <h1>ARTC</h1>
            
          </div>

          <div className="topnav" id="myTopnav">
            <Link to="/home2"> Home </Link>
          </div>

          <div className="content">
            <div className="rright-panel">
              <h2>Login</h2>
              <form onSubmit={this.loginn}>
                <h4>Username</h4>
                <input type="text" id="search" name="username" />
                <h4>Password</h4>
                <input type="text" id="search" name="password" />
                <br />
                <br />
                <button type="submit">Login</button>
              </form>
              
              <form onSubmit={this.createAcc}>
                <button type="submit">Create Account</button>
              </form>
            </div>    
            <div className="lleft-panel">
              <div className="lleft-row1">
                <h3 className="subtitle"><br />Search Artwork<br /></h3>
                
                <form onSubmit={this.searchArtwork}>
                  <input type="text" id="search" name="searchQ" />
                  <button type="submit">Search Artwork</button>
                </form>

                <h3 className="subtitle"><br />Search Artists</h3>
                <nav>
                  <ul>
                    <li>Type of Art</li>
                    <li>
                      <select onChange={this.type}>
                        <option value="Select one">Select one</option>
                        <option value="Animals">Animals</option>
                        <option value="Anime">Anime</option>
                        <option value="Comics">Comics</option>
                        <option value="Lanscapes">Landscapes</option>
                        <option value="Logos">Logos</option>
                      </select>
                    </li>
                    <li>Price</li>
                    <li>
                      <select onChange={this.price}>
                        <option value="Select one">Select one</option>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                      </select>
                    </li>
                    <li>Time</li>
                    <li>
                      <select onChange={this.time}>
                        <option value="Select one">Select one</option>
                        <option value="10">10 days</option>
                        <option value="20">20 days</option>
                        <option value="30">30+ days</option>
                      </select>
                    </li>
                    <li>
                      <form onSubmit={this.searchArtists}>
                        <button type="submit">Search Artists</button>
                      </form>
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

loginPage.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(loginPage);
