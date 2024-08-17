import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  let headStyle = {
    color: "#F2F2F2",
    "margin-top": "70px",
    "margin-bottom": "30px",
    "text-shadow": "5px 1px 5px #131313"
  }
  let Style = {
    color: "#F2F2F2",
    "text-shadow": "2px 2px 10px #131313"
  }
  let linkStyle = {
    color: "#F9ED32"
  }
  return <div className='container'>
    <h1 style={headStyle}>Contact Us</h1>
    <h5 style={Style}>Mail: <Link style={linkStyle} to="mailto:info@rhyno.in">info@rhyno.in</Link></h5>
    <h5 style={Style}>Mobile no.: +91-9023987528</h5>
    <h5 style={Style}> Location: Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
      Raisan, Gandhinagar, Gujarat, India.</h5>
  </div>;
};

export default Contact;
