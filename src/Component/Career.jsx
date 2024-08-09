import React from 'react';

const Career = () => {
  return (
    <div className="card-container">
      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <p className="card-text">Java Full Stack Development</p>
          <p className='aut'>By Isha Sharma</p>
          <div className='data'>
            <p>06 Aug, 2024</p>
            <p>4 Min Read</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <p className="card-text">Data Science Course</p>
          <p className='aut'>By Meghana D</p>
          <div className='data'>
            <p>26 Mar, 2024</p>
            <p>3 Min Read</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <p className="card-text">MERN Full Stack Development</p>
          <p className='aut'>By Isha Sharma</p>
          <div className='data'>
            <p>02 Mar, 2024</p>
            <p>5 Min Read</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <p className="card-text">UI/UX Design course</p>
          <p className='aut'>By Meghana D</p>
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