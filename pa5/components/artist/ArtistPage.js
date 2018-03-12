import React from 'react';
import {Link} from 'react-router';
import bullet from '../../images/right-bullet.jpg';
import profile1 from '../../images/profile.jpg';
import cat1 from '../../images/cat1.jpg';
import cat2 from '../../images/cat2.jpg';
import dog1 from '../../images/dog1.jpg';
import '../../style2/style2.css';
class ArtistPage extends React.Component {
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
                  <h2 className="title">CatLover99</h2>
                  <img id={"profPic"} src={profile1} alt={"profPic"} width={"500"}/> 
                  <p id={"desc"}><b>Hi, I draw mainly cats! Feel free to commission me at cheap prices!</b></p>

                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <h3 className="subtitle">Works</h3>
                  <br />

                  <figure id="p1">
                    <img id="pic1" src={cat1} alt={"pic1"} width={"200"} height={"200"}/>
                  </figure>

                  <figure id="p2">
                    <img id="pic2" src={cat2} alt={"pic2"} width={"200"} height={"200"}/>
                  </figure>
                  <figure id="p3">
                    <img id="pic3" src={dog1} alt={"pic3"} width={"200"} height={"200"}/>
                  </figure>



                  <Link to="/artistEdit" className="btn btn-primary btn-lg">Edit profile (CatLover99 only)</Link> 
                </div>
              </div>

              <div className="right-panel">
                <div className="right-row1">
                  <h3 className="subtitle">Statistics</h3>
                  <p>&nbsp;</p>
                  
                  <img src={bullet}  alt={"bullet"} height={"8"} width={"17"}/><b>Most Popular Tags</b>
                  <div className="list1">
                    <Link to="/animalHits">Animals</Link>
                    <br /><a href="#">Cute</a>
                    <br /><a href="#">Cats</a>
                    <br /><a href="#">Sketch</a>
                    <br /><a href="#">Landscapes</a>
                  </div>
                  
                  <p>&nbsp;</p>
                  
                  <img src={bullet}  alt={"bullet"} height={"8"} width={"17"}/><b>Commissions Completed:6</b>
                  <p>&nbsp;</p>
                  <img src={bullet}  alt={"bullet"} height={"8"} width={"17"}/><b>Average Overall Rating:</b><br /><div className="list1">★★★★★</div>
                  <p>&nbsp;</p>
                  <img src={bullet}  alt={"bullet"} height={"8"} width={"17"}/><b>Average Timeliness Rating:</b> <br /><div className="list1">★★★★☆</div>
                  <p>&nbsp;</p>
                  <img src={bullet}  alt={"bullet"} height={"8"} width={"17"}/><b>Average Work Quality Rating:</b><br /><div className="list1">★★★★★</div>
                  <p>&nbsp;</p>
                  <img src={bullet}  alt={"bullet"} height={"8"} width={"17"}/><b>Average Price Rating:</b><br /><div className="list1">$</div>
                  <p>&nbsp;</p>
                </div>
                

                <div className="right-row2">
                  <h3 className="subtitle">Latest Commissions</h3>
                  <p>&nbsp;</p>
                  <img src={bullet}  alt={"bullet"} height={"8"} width={"17"}/><b>January 27, 2018</b>
                  <div className="list1">
                    <a href = "bridge.html"><strong>Bridge</strong> </a> for <strong> oranges27 </strong>
                    <p>A simple bridge sketch. Took me 2 days on this one!</p>
                  </div>
                  
                  <p>&nbsp;</p>
                  <img src={bullet}  alt={"bullet"} height={"8"} width={"17"}/><b>January 5, 2018</b>
                  
                  <div className="list1">
                    <Link to="cat1" activeClassName="active">A Sketch of raiart's Cat</Link>
                    <p>Client asked me to draw her lovely kitty!</p>
                  </div>
                  
                  <p>&nbsp;</p>
                  <img src={bullet}  alt={"bullet"} height={"8"} width={"17"}/><b>December 31, 2018</b>
                  
                  <div className="list1">
                    <a href = "dog.html"><strong>Doggo</strong> </a> for <strong> JeanBrook </strong>
                    <p>I suppose dogs are quite alright too.</p>
                  </div>

                  <p>&nbsp;</p>
                </div>

                <div className="right-row3">
                  <h3 className="subtitle">Latest Reviews</h3>
                  <p>&nbsp;</p>

                  <img src={bullet}  alt={"bullet"} height={"8"} width={"17"}/>January 27, 2018
                  <div className="list1">
                    <p>User: oranges27 </p> 
                    <p>Overall Rating: ★★★★★</p>
                    <p>Timeliness: ★★★★★</p>
                    <p>Work Quality: ★★★★★</p>
                    <p>Price: $</p>
                    <p>"Love it!"</p>
                  </div>
                  <p>&nbsp;</p>

                  <img src={bullet}  alt={"bullet"} height={"8"} width={"17"}/>January 5, 2018
                  <div className="list1">
                    <p>User: raiart </p>
                    <p>Overall Rating: ★★★★★ </p>
                    <p>Timeliness: ★★★★★ </p>
                    <p>Work Quality:★★★★★  </p>
                    <p>Price: $ </p>
                    <p>"CatLover99 is a great artist, highly recommended!"</p>
                  </div>
                </div>


                <div className="right-row4">
                  <h3 className="subtitle">Contact Info</h3>
                  <p>&nbsp;</p>
                  <p>E-mail: catlover99@gmail.com</p>
                  <p>Fax: 626-000-0000</p>
                  <p>Phone: 858-000-0000</p>
        
                  <Link to="/msg" className="btn btn-primary btn-lg">Start a chat with me!</Link> 
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistPage;
