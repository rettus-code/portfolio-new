import React from "react";
import "./index.css";
import me from '../images/me.jpg'
const styles = {
  imgStyle: {
    border: "5px double #9A5A45",
    marginLeft: "5%"
  }
};


function Contact(props) {
  return (
    <div class="container col-12">
    <div class="row">
        <header class="col-md-12">
            <h1 id="RC_h1" class="text-center">Rettus-Code<br/>
            </h1>
        </header>
    </div>
    <hr width="70%"/>
    <div class="row">
      <div class="col-lg-2 col-md-1"></div>
      <div class="col-lg-4 col-md-6">
        <h2>Social Media</h2>
        <br/>
        <h4><a href="https://stackexchange.com/users/18674299/michael">StackExchange/StackOverflow</a></h4>
        <h4><a href="https://www.linkedin.com/in/michael-rettus-23680b150/">LinkedIn</a></h4>
        <h4><a href="https://www.upwork.com/freelancers/~0120d677d50b804ebd">UpWork</a></h4>
        <h4><a href="https://github.com/rettus-code">Github Profile</a></h4>
        
          <br/>
          <h6>Contact Information:</h6>
          <p>Michael S Rettus II  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ph#(360) 499-9260  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  email: michael.rettusii@gmail.com</p>
      </div>
      <div class="col-lg-2 col-md-1">
    <img src={me} style={styles.imgStyle} alt="Self Image"/>
    </div>
    </div>
    
    <div class="row">

      <div class="col-lg-2 col-md-1"></div>
      <div class="col-lg-4 col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Primary Topic</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>New Project</option>
              <option>Old Project</option>
              <option>Debugging</option>
              <option>Updates</option>
              <option>Migrating Servers</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Details and additional return contact information</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="9"></textarea>
          </div>
        </form>
      </div>
    </div>

  </div>
  );
}

export default Contact;
