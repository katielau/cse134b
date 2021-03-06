import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import '../../style1/styles.css';

class artistResultsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.searchArtwork = this.searchArtwork.bind(this);
    this.searchArtists = this.searchArtists.bind(this);
    this.type = this.type.bind(this);
    this.price = this.price.bind(this);
    this.time = this.time.bind(this);
    this.state = {
      type: "",
      price: "",
      time: ""
    };    
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
            <Link to={this.props.state.currUserNav}> {this.props.state.currUser} </Link>
            <Link to="home2" onClick={this.props.state.logout}> {this.props.state.logoutNav} </Link>
            <Link to="/msg"> {this.props.state.msgNav} </Link>
          </div>

          <div className="content">
            <div className="rright-panel">
            <h2 className="title">Artist Results for {this.props.state.type}, {this.props.state.price}, {this.props.state.time}</h2>
                    <ul id="1">
                        <li>
                            <img id="1a" src={require('../artworks/1.jpg')} />
                        </li>
                        <li>
                            <img id="1b" src={require('../artworks/5.jpg')} />
                        </li>
                        <li>
                            <a id="1c" href="">Artist1</a>
                        </li>
                        <li id="1d">
                            $<br />10 days<br />★★★☆☆
                        </li>
                    </ul>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <ul id="2">
                        <li>
                            <img id="2a" src={require('../images/cat1.jpg')} />
                        </li>
                        <li>
                            <img id="2b" src={require('../images/landscape.jpg')} />
                        </li>
                        <li>
                            <Link to="/artist" activeClassName="active" >catlover99</Link>
                        </li>
                        <li id="2d">
                            $<br />10 days<br/>★★★★★
                        </li>
                    </ul>
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

export default artistResultsPage;
