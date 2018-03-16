// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.searchArt = this.searchArt.bind(this);
    this.searchArtist = this.searchArtist.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.state = {
      loggedIn: false,
      login: this.login,
      logout: this.logout,
      logoutNav: '',
      currUser: 'Login',
      currUserNav: '/login',
      msgNav: '',
      searchArt: this.searchArt,
      searchQ: '',
      searchArtist: this.searchArtist,
      type: '',
      price: '',
      time: '',
      createAccount: this.createAccount,
    };
  }
  
  createAccount(e, u, p){
    const temp = this.state.usernames.slice();
    temp.push(u);
    this.setState({usernames:temp});
    
    const temp2 = this.state.passwords.slice();
    temp2.push(p);
    this.setState({passwords:temp2});
  }

  login(e, username, password){
    this.setState({logoutNav: 'Logout', loggedIn: true, currUser: username, currUserNav: '/artist', msgNav: 'Messages'});
  }

  logout(){
    this.setState({logoutNav: '', loggedIn: false, currUser: 'Login', currUserNav: 'Login', msgNav: ''});
  }

  searchArt(searchQuery){
    this.setState({searchQ: searchQuery});
  }

  searchArtist(ty, pr, ti){
    this.setState({type: ty, price: pr, time: ti});
  }

  render() {
    return (
      <div className="container-fluid">
        {React.cloneElement(this.props.children, {state: this.state})}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
