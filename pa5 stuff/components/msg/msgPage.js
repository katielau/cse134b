import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import '../../style1/styles.css';
import styles from './msg.module.css';


class msgPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.done = this.done.bind(this);
    this.state = { items: [], text: '', test: "test test" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  
  done(db) {
    const temp = document.getElementById(db).innerHTML;
    document.getElementById(db).innerHTML = "<strike>" + temp + "</strike>";
  }
 
  render() {
    console.log(styles);
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
            <div className={styles.panel}>
              <h2>Messages</h2>

        <NewMsg items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Send
          </button>
        </form>

            </div>    
            <div className="lleft-panel">
              <div className="lleft-row1">              
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

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      uuu: this.props.state.currUser,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class NewMsg extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}><strong><u>{item.uuu}</u></strong><br/>{item.text}</li>
        ))}
      </ul>
    );
  }
}


export default msgPage;
