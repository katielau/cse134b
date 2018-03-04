import React from 'react';
import {Link} from 'react-router';
import bullet from '../../images/right-bullet.jpg';
import cat1 from '../../images/cat1.jpg';
import '../../styles/style2.css';
//import '../../styles/script2.js';


class Cat1Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'This is my description.',
            value2: ''
        };
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
      
    handleChange(event) {
        this.setState({value2: event.target.value});
    }
      
    handleSubmit(event) {
          alert('Updated description');
          //this.state.value2= document.getElementById('desc2').value;
          //this.setState({value2: document.getElementById('desc2').value});
          //this.state.value= document.getElementById('desc2').value;
        
          document.getElementById('desc1').innerHTML= this.state.value2;
          document.getElementById('desc2').value= '';
          event.preventDefault();
    }
    

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
                        <div className="center">
                            <img src={cat1} alt={"Cat sketch"} />
                            <br /> <h1><b>Sketch of raiart's Cat</b></h1>
                            <br />
                            <figure id="d1">
                                <p id="desc1"> A work commissioned for raiart, who knows of my love for cats! She wanted me to draw one of her pet cats and sent me a photo. The sketch was done in pencil and took me just a couple hours to complete. Guess that's one more into the cat album!</p>
                            </figure>
                            <br />
                        
                            <form onSubmit={this.handleSubmit}>
                                <textarea id= "desc2" value={this.state.value2} onChange= {this.handleChange} rows={"4"} cols={"50"}>A work commissioned for raiart, who knows of my love for cats! She wanted me to draw one of her pet cats and sent me a photo. The sketch was done in pencil and took me just a couple hours to complete. Guess that's one more into the cat album!</textarea>

                                <br />
                                <input type="submit" value="Submit" />

                            </form>
                            <br />
                            <br />
                            <Link to="/artist">Back to CatLover99 </Link>
                            <br />
                            <br />



                        </div>
                    </div>
                </div>

                <div className="right-panel">
                    <div className="right-row1">
                        <h3 className="subtitle">Work details</h3>
                        <p>&nbsp;</p>
                        <p className="blue"><img src={bullet} alt={"bullet"} height={"8"} width={"17"}/>Artist: CatLover99</p>
                        <p>&nbsp;</p>
                        <p className="blue"><img src={bullet} alt={"bullet"} height={"8"} width={"17"}/>Customer: raiart</p>
                        <p>&nbsp;</p>
                        <p className="blue"><img src={bullet} alt={"bullet"} height={"8"} width={"17"}/>Date Published: January 5, 2018</p>
                        <p>&nbsp;</p>
                        <p className="blue"><img src={bullet} alt={"bullet"} height={"8"} width={"17"}/>Tools Used: HB Graphite</p>
                        <p>&nbsp;</p>
                        <p className="blue"><img src={bullet} alt={"bullet"} height={"8"} width={"17"}/>Tags: Sketch, Animal, Cat, Traditional</p>
                        <p>&nbsp;</p>
                        <p className="blue"><img src={bullet} alt={"bullet"} height={"8"} width={"17"}/>Timeframe: January 4, 2018 - January 5, 2018 (1 day elapsed)</p>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Cat1Page;
