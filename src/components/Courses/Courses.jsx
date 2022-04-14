import React from 'react';
import './Courses.css';
import { CoursesData } from "./CoursesData";


const Courses = () => {
  return (
    <div className='courses'>

      <h1> COURSES AND CERTIFICATION</h1>
      
      <div className='container d-flex flex-column justify-content-center align-items-center'>
     
    
        {CoursesData.map((course, index) => {

          return (


            <div className={index % 2 === 0 ? 'before' : 'after'} key={index}>


              <img src={course.image} alt={course.title} />
              <div className='course-content'>
                <h4> {course.title}</h4>
                <p> {course.description}</p>

              </div>


            </div>


          );



        })}

      </div>
    </div>
  )
}

export default Courses