import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import '../../style1/styles.css';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import toastr from 'toastr';

class createAccountPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.searchArtwork = this.searchArtwork.bind(this);
    this.searchArtists = this.searchArtists.bind(this);
    this.createAcc = this.createAcc.bind(this);
    this.type = this.type.bind(this);
    this.price = this.price.bind(this);
    this.time = this.time.bind(this);
    this.state = {
      type: "",
      price: "",
      time: "",
    };  
  }
  
  createAcc(event){
    const user1 = event.target.username.value;
    const pass1 = event.target.password.value;

    let user = {};
    user.username = user1;
    user.password = pass1;

    this.props.actions.saveUser(user);
    this.props.state.login(event, user1, pass1);
    browserHistory.push({pathname: '/home2'});
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
              <h2>Create Account</h2>
              <form onSubmit={this.createAcc}>
                <h4>Username</h4>
                <input type="text" id="search" name="username" />
                <h4>Password</h4>
                <input type="text" id="search" name="password" />
                <br />
                <br />
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

createAccountPage.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

createAccountPage.contextTypes = {
  router: PropTypes.object
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

export default connect(mapStateToProps, mapDispatchToProps)(createAccountPage);
