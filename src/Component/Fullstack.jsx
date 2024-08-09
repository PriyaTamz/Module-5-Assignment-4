import React from 'react';

const Fullstack = () => {
  return (
    <div className="card-container">
      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="imgtop" alt="..." style={{ margin: 0, width: '100%', display: 'block' }} />
        <div className="card-body">
          <p className="card-text">Best Full-Stack Development Project Ideas in 2024</p>
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
          <p className="card-text">How Long Would It Take to Be a Full Stack Developer?</p>
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
          <p className="card-text">7 Unique Web Development Project Ideas for Beginners</p>
          <p className='aut'>By Lukesh S</p>
          <div className='data'>
            <p>02 Apr, 2024</p>
            <p>6 Min Read</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fullstack;
