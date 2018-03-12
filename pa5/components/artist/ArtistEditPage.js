import React from 'react';
import {Link} from 'react-router';
import axios, { post } from 'axios';
import bullet from '../../images/right-bullet.jpg';
import profile1 from '../../images/profile.jpg';
import cat1 from '../../images/cat1.jpg';
import cat2 from '../../images/cat2.jpg';
import dog1 from '../../images/dog1.jpg';
import '../../style2/style2.css';

class ArtistEditPage extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
          file1:null,
          file2:null,
          file3:null,
          file4:null,
          desc1:null
        }
        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.onChange3 = this.onChange3.bind(this);
        this.onChange4 = this.onChange4.bind(this);
 
    }
    handleChange(event) {
        this.setState({desc1: event.target.value});
    }
    handleDelete1(event){
        document.getElementById('pic1').src='';
        event.preventDefault();
    }
    handleDelete2(event){
        document.getElementById('pic2').src='';
        event.preventDefault();
    }
    handleDelete3(event){
        document.getElementById('pic3').src='';
        event.preventDefault();
    }
    onChange1(e) {
        let file    = document.querySelector('#uploadedProfPic').files[0];
        this.setState({file1:e.target.files[0]});
        document.getElementById('profPic').src= this.file1;
        let reader  = new FileReader();
        reader.addEventListener("load", function () {

            document.getElementById("profPic").src = reader.result;

        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    }    

    onChange2(e) {
        let file    = document.querySelector('#input-file1').files[0];
        this.setState({file2:e.target.files[0]});
        document.getElementById('pic1').src= this.file2;
        let reader  = new FileReader();
        reader.addEventListener("load", function () {
            document.getElementById("pic1").src = reader.result;

        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    onChange3(e) {

        let file    = document.querySelector('#input-file2').files[0];
        this.setState({file3:e.target.files[0]});
        document.getElementById('pic2').src= this.file3;
        let reader  = new FileReader();
        reader.addEventListener("load", function () {
            document.getElementById("pic2").src = reader.result;


        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    onChange4(e) {
        let file    = document.querySelector('#input-file3').files[0];
        this.setState({file4:e.target.files[0]});
        document.getElementById('pic3').src= this.file4;
        let reader  = new FileReader();
        reader.addEventListener("load", function () {
            document.getElementById("pic3").src = reader.result;

        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
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
                        <h2 className="title">CatLover99</h2>
                        
                        <br />
                        <h3>Change profile photo:</h3>
                        <br />
                        
                        <form onSubmit={this.onFormSubmit1}>
                        <input id= "uploadedProfPic" src="#" type="file" onChange={this.onChange1} accept="image/x-png,image/gif,image/jpeg"/>
                        <br />
                        <figure id="p0">
                            <img id="profPic" src={profile1} alt="Profile picture preview" width={"500"}/>
                        </figure>
                        </form>


                        <br />
                        <br />
                        <br />
                        <br />
                        
                        <textarea id="descEdit" value={this.state.desc1} onChange= {this.handleChange} rows="4" cols="50">Hi, I draw mainly cats! Feel free to commission me at cheap prices!</textarea>
                        <br />
                        <br />
                        <br />
                        <p>&nbsp;</p>

                        <p>&nbsp;</p>
                        <h3 className="subtitle">Works</h3>
                        <br />



                        <input id="input-file1" src={"#"} onChange={this.onChange2}  type="file" accept="image/jpeg, image/png"/>
                        <form onSubmit={this.handleDelete1}>
                            <input type="submit" value="Delete" />
                        </form>
                        <figure id="p1"><img id="pic1" src={cat1} alt={"pic1"} width={"200"} height={"200"}/></figure><br />

                        <input id="input-file2" src={"#"} onChange={this.onChange3}  type="file" accept="image/jpeg, image/png"/>
                        <form onSubmit={this.handleDelete2}>
                            <input type="submit" value="Delete" />
                        </form>
                        <figure id="p2"><img id="pic2" src={cat2} alt={"pic2"} width={"200"} height={"200"}/></figure><br />

                        <input id="input-file3" src={"#"} onChange={this.onChange4} type="file" accept="image/jpeg, image/png"/>
                        <form onSubmit={this.handleDelete3}>
                            <input type="submit" value="Delete" />
                        </form>
                        <figure id="p3"><img id="pic3" src={dog1} alt={"pic3"} width={"200"} height={"200"}/></figure><br />

                        <br />

                        <p>&nbsp;</p>
                        <br />
                        <br />
                        <Link to="/artistConfirm" className="btn btn-primary btn-lg">Save all changes</Link> 
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default ArtistEditPage;