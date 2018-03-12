import React from 'react';
import {Link} from 'react-router';
import '../../style2/style2.css';

class ArtistConfirmPage extends React.Component {
    render() {
        return (
          <div>
            <div className="main">
                <div className="page">
                    <div className="header">
                        <h1>ARTC</h1>
                    </div>
                    <div className="topnav" id="myTopnav">
                        <a href="home.html" className="active">Home</a>
                        <a href="faq.html">FAQ</a>
                        <p><a id="login" href="login.html">Login</a></p>
                        <p><a id="logout" href="home.html"></a></p>
                        <p><a id="msgTab" href="messaging.html"></a></p>
                    </div>
                    <div className="content">
                        <div className="left-panel">
                            <div className="left-panel-in">

                                <h2>Your changes have been saved.</h2>

                                <br />
                                <br />
                                <Link to="/artist" className="btn btn-primary btn-lg">Back to CatLover99</Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default ArtistConfirmPage;
