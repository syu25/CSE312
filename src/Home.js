import React, { Component } from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Login from "./Login";
import DirectMessage from "./DirectMessage"

class Home extends Component {


  render() {
    return (
      
      <div className="home">

      <Navbar fixed="top" variant="dark" className="navbar">
        <div className="logo">
          <Link to="Login" style={{textDecoration: 'none'}}>Login</Link>
          <Link to="DirectMessage" style={{textDecoration: 'none'}}>Messages</Link>
        </div>
      </Navbar>

      <div className ="Body">

      <div className = "Post">
<textarea id="Send-Message" rows="3" cols="39" wrap='soft'>Whats Up?</textarea>
<br></br>
<button type="button">Send</button>
<button type="button">Add Media</button>
<button type="button">Clear</button>
{/* <input type="file" onChange={this.onChangeHandler}/> */}
</div>

        <div className="Posted">
            Posts shows up here
            <button type="button">Like</button>0
            <button type="button">Dislike</button>0
        </div>


      </div>

      <div className ="Friends">
          Friends
      </div>



    
      
      </div>
      
    );
  }

  onChangeHandler=event=>{

    console.log(event.target.files[0])
  
  }
}

export default Home;