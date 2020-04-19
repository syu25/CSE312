import React, { Component } from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class DirectMessage extends React.Component {


  render() {
    return (
      
      <div className="home">

    <h2><strong>Direct Message user_name</strong></h2>
    <h3><strong>Chat History:</strong></h3>
    <textarea id="Chat-History" rows="30" cols="39" wrap='soft'>No chat History... Be the first to send user_name a message!!!</textarea>
    <br></br>
    <textarea id="Send-Message" rows="3" cols="39" wrap='soft'>Whats Up?</textarea>
    <br></br>
    <Button type="button">Send</Button>
    <Button type="button">Add Media</Button>
    <Button type="button">Clear Chat History</Button>
    <Link to="/" style={{ textDecoration: "none" }}>
          <Button type="button">Back</Button>
    </Link>
       <input type="file" name="file" onChange={this.onChangeHandler}/>
      </div>
      
    );
  }

  onChangeHandler=event=>{

    console.log(event.target.files[0])
  
  }
}

export default DirectMessage;