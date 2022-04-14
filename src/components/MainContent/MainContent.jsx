import React from 'react';
import Card from '../Card/Card';
import "./MainContent.css";
import card1 from "./../../assets/images/card1.jpg";
import card2 from "./../../assets/images/card2.png";
import card3 from "./../../assets/images/card3.jpg";

const MainContent = () => {
  return (
    <div className='mainContent'>
      <h2>TECHOLOGIES I USED ON THIS SITE  </h2>

      <div className='container'>
        <div className="row">

          <div className="col-md-4 mycard">
            <Card  title="HTML-CSS-Bootstrap" image={card1} description="Basic of this or any site.The Bootstrap framework is built on HTML, CSS, and JavaScript. It is really easy to learn!" />
          </div>
          
          <div className="col-md-4">
            <Card  title="ReactJS" image={card2} description="It is fast, scalable, flexible, powerful.I used Components,Hooks and showed Components Interacting. " />
          </div>

          <div className="col-md-4">
            <Card  title="SASS" image={card3} description="Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. i love it!  " />
          </div>
         

        </div>

 
      </div>
    </div>
  )
}

export default MainContent