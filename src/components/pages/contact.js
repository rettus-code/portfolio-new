import React from "react";
import "./index.css";
import Contact from "../../../../uw-blv-fsf-ft-06-2020-u-c/week-10/19-React/01-Activities/22-Ins_IntroReactRouter/src/components/pages/Contact";

function Contact(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
