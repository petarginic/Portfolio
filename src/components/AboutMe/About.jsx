import React from 'react';
import petar from "./../../assets/images/petar.jpg";

import "./About.css";


const About = () => {
  return (
    <div className='container about'>
      <div className='row'>
        <div className='col-md-9'>
          <h1> I am Petar, the creator of this website! </h1>
          <p>Hi, my name is Petar. I am 29 years. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis perspiciatis fugiat beatae dolore asperiores voluptates hic culpa maxime error velit itaque corrupti nostrum, voluptas dolorem neque fugit modi sequi repellat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro deleniti perspiciatis distinctio possimus, delectus voluptatum magnam modi temporibus recusandae cumque quo earum quis nemo? Illo laudantium nobis eaque possimus.


          </p>
        </div>
        <div className='col-md-3 image-about'>
          <img src={petar} alt="ker" />
        </div>
      </div>






      <div className='row'>
        <div className='col'>
          <h1> Education and working experiance </h1>
          <p>Hi, my name is Petar. I am 29 years. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis perspiciatis fugiat beatae dolore asperiores voluptates hic culpa maxime error velit itaque corrupti nostrum, voluptas dolorem neque fugit modi sequi repellat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro deleniti perspiciatis distinctio possimus, delectus voluptatum magnam modi temporibus recusandae cumque quo earum quis nemo? Illo laudantium nobis eaque possimus.


          </p>
        </div>

      </div>




      <div className='row sports'>

        <div className='col-md-8'>
          <h1> Hobbies and sport </h1>
          <p>Hi, my name is Petar. I am 29 years. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis perspiciatis fugiat beatae dolore asperiores voluptates hic culpa maxime error velit itaque corrupti nostrum, voluptas dolorem neque fugit modi sequi repellat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro deleniti perspiciatis distinctio possimus, delectus voluptatum magnam modi temporibus recusandae cumque quo earum quis nemo? Illo laudantium nobis eaque possimus.
          </p>
        </div>




        <div className='col-md-4'>

          <div className='row'>

          <div className='grid-container'>
            <section id="grid-component">
                <header> </header>
                <main> </main>
                <footer></footer>

            </section>
          </div>

          </div>







        </div>
      </div>

















    </div>
  )
}

export default About