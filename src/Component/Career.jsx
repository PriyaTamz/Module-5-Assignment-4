import React from 'react';
import fs2 from './fs2.jpg';
import data3 from './data3.jpg';
import fs3 from './fs3.jpg';  
import fstack1 from './fstack1.jpg';  

const Career = () => {
  return (
    <div className="card-container">
      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <img src={fs2} className="card-img-top" alt="Java Full Stack Development Course"></img>
        <div className="card-body">
          <p className="card-text">Java Full Stack Development Course</p>
          <p className='aut'>By Isha Sharma</p>
          <div className='data'>
            <p>06 Aug, 2024</p>
            <p>4 Min Read</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <img src={data3} className="card-img-top" alt="Data Science Course"></img>
        <div className="card-body">
          <p className="card-text">Data Science Course</p>
          <p className='aut1'>By Meghana D</p>
          <div className='data'>
            <p>26 Mar, 2024</p>
            <p>3 Min Read</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <img src={fs3} className="card-img-top" alt="MERN Full Stack Development"></img>
        <div className="card-body">
          <p className="card-text">MERN Full Stack Development</p>
          <p className='aut1'>By Isha Sharma</p>
          <div className='data'>
            <p>02 Mar, 2024</p>
            <p>5 Min Read</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <img src={fstack1} className="card-img-top" alt="UI/UX Design course"></img>
        <div className="card-body">
          <p className="card-text">UI/UX Design course</p>
          <p className='aut1'>By Meghana D</p>
          <div className='data'>
            <p>06 Apr, 2024</p>
            <p>8 Min Read</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Career;
