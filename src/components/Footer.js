import React from "react";
import { Link, useLocation } from "react-router-dom";
import './pages/index.css';
const styles ={
    inlineStyle: {
    paddingRight: "4%",
    marginLeft: "4%"
  },
  blockStyle: {
      marginLeft: "4%",
      marginRight: "4%"
  }
}


function Footer() {
    const location = useLocation();
    return (
    <span style={styles.blockStyle} className="d-block p-2 bg-dark text-white">
    <span><a style={styles.inlineStyle} href="https://stackexchange.com/users/18674299/michael">StackExchange/StackOverflow</a></span>
    <span><a style={styles.inlineStyle} href="https://www.linkedin.com/in/michael-rettus-23680b150/">LinkedIn</a></span>
    <span><a style={styles.inlineStyle} href="https://www.upwork.com/freelancers/~0120d677d50b804ebd">UpWork</a></span>
    <span><a style={styles.inlineStyle} href="https://github.com/rettus-code">Github Profile</a></span>
    <span><a style={styles.inlineStyle} href="https://bootcamp.uw.edu/">UW Coding Bootcamp</a></span>
    <span><a style={styles.inlineStyle} href="https://catalog.skagit.edu/preview_program.php?catoid=27&poid=6366">Skagit Valley College</a></span>
    </span>
    )
}

export default Footer;