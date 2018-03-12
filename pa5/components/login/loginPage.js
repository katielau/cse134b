import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import '../../style1/styles.css';

class loginPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.searchArtwork = this.searchArtwork.bind(this);
    this.searchArtists = this.searchArtists.bind(this);
    this.home = this.home.bind(this);
    this.loginn = this.loginn.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.msg = this.msg.bind(this);
    this.createAcc = this.createAcc.bind(this);
    this.state = {
      type: "",
      price: "",
      time: ""
    };  
  }
  
  loginn(event){
    const user = event.target.username.value;
    const pass = event.target.password.value;
    browserHistory.push({
      pathname: '/home2',
      state: {username: user, login: "/artist", logout: "Logout", msg: "Messages"}
    });
  }

  createAcc(event){
    alert("here");
    browserHistory.push({
      pathname: '/createAccount',
      state: {username: this.props.location.state.username, login: this.props.location.state.login, logout: this.props.location.state.logout, msg: this.props.location.state.msg}
    });
  }
  
  searchArtwork(event) {
    const searchQuery = event.target.searchQ.value;
    browserHistory.push({
      pathname: '/artworkResults',
      state: {username: this.props.location.state.username, login: this.props.location.state.login, logout: this.props.location.state.logout, msg: this.props.location.state.msg}
    });
  }

  searchArtists(event) {
    browserHistory.push({
      pathname: '/artistResults',
      state: {
        type: this.state.type, price: this.state.price, time: this.state.time,
        username: this.props.location.state.username, login: this.props.location.state.login, logout: this.props.location.state.logout, msg: this.props.location.state.msg
      }
    });
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
      pathname: '/home2',
      state: {username: "Login", login: "/login", logout: "", msg: ""}
    });
  }

  msg(){
    browserHistory.push({
      pathname: '/home2',
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

export default loginPage;
