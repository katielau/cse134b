import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

class msgPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.done = this.done.bind(this);
  }
  
  done(db) {
    const temp = document.getElementById(db).innerHTML;
    document.getElementById(db).innerHTML = "<strike>" + temp + "</strike>";
  }

  pushMsg(event){
    const temp = document.getElementById("msgs").innerHTML;
    const mg = event.target.newMsg.value;
    document.getElementById("msgs").innerHTML = temp + "<u>ARTIST</u><br /><sub>" + mg + "</sub><br /><br />";
  }
  
  render() {
    return (
      <div className="main">
        <div className="page">
          <div className="header">
            <h1>ARTC</h1>
          </div>
          <div className="content">
            <div className="right-panel">
              <h2>Messages</h2>
              <br />
              <h4 id="msgs">
                <u>ARTIST</u>
                <br />
                <sub>Hi there!</sub>
                <br />
                <br />
                <u>BUYER</u>
                <br />
                <sub>Hello!</sub>
                <br />
                <br />
              </h4>
              <form onSubmit={this.pushMsg}>
                <input type="text" id="newMsg" name="newMsg" />
                <button type="submit">Send</button>
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
