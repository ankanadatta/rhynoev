import React from 'react';
import RLogoftr from './rhynoLogoftr.png';

const About = () => {
  let headStyle = {
    color: "#F2F2F2",
    "margin-top": "70px",
    "text-align": "center",
    "text-shadow": "5px 1px 5px #131313"
  }
  let Style = {
    "text-align": "center",
    color: "#F2F2F2",
    "text-shadow": "1px 1px 5px #131313"
  }
  return <div className='container'>
    <h1 className='lato-regular w3-animate-left' style={headStyle}>About Us</h1>
    <p className='lato-regular w3-animate-left' style={Style}>Established in 2019 by an automotive engineer with a vision for sustainable and robust
      mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team
      of young individuals passionately driving innovation in the electric vehicle industry. We
      believe in engineering solutions that solve problems.<br/><br/>
      With our first product, we've taken a bold step to create something more than just a vehicle;
      it's a unique experience of elegance, comfort and style, addressing the pitfalls of
      conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and
      ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet
      operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically
      appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new
      era in sustainable and dependable electric transportation.</p>
    <img className='abtimg w3-animate-zoom' src={RLogoftr} />
  </div>;
};

export default About;
