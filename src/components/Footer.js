import React from "react";
import { Link, useLocation } from "react-router-dom";
import './pages/index.css';
const styles ={
    inlineStyle: {
    paddingLeft: "5%",
  }
}


function Footer() {
    const location = useLocation();
    return (
    <span className="d-block p-2 bg-dark text-white">
    <div className="d-inline p-2 bg-dark text-white"><a style={styles.inlineStyle} href="https://stackexchange.com/users/18674299/michael">StackExchange/StackOverflow</a></div>
    <div className="d-inline p-2 bg-dark text-white"><a style={styles.inlineStyle} href="https://www.linkedin.com/in/michael-rettus-23680b150/">LinkedIn</a></div>
    <div className="d-inline p-2 bg-dark text-white"><a style={styles.inlineStyle} href="https://www.upwork.com/freelancers/~0120d677d50b804ebd">UpWork</a></div>
    <div className="d-inline p-2 bg-dark text-white"><a style={styles.inlineStyle} href="https://github.com/rettus-code">Github Profile</a></div>
    <div className="d-inline p-2 bg-dark text-white"><a style={styles.inlineStyle} href="https://bootcamp.uw.edu/">UW Coding Bootcamp</a></div>
    <div className="d-inline p-2 bg-dark text-white"><a style={styles.inlineStyle} href="https://catalog.skagit.edu/preview_program.php?catoid=27&poid=6366">Skagit Valley College</a></div>
    </span>
    )
}

export default Footer;