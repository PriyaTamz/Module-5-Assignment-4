import React from 'react'

const Datascience = () => {
  return (
    <div className="card-container">

      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <img src="data1.png" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <p className="card-text">12 Real-World Data Science Examples: Power Of Data Science</p>
          <p className='aut'>By Lukesh S</p>
          <div className='data'>
            <p>25 Mar, 2024</p>
            <p>7 Min Read</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <img src="datas2.webp" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <p className="card-text">Can A Commerce Student Do Data Science?</p>
          <p className='aut1'>By Saakshi</p>
          <div className='data'>
            <p>16 Apr, 2024</p>
            <p>3 Min Read</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <img src="data3.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <p className="card-text">Roles and Responsibilities of a Data Scientist</p>
          <p className='aut2'>By Jaishree</p>
          <div className='data'>
            <p>16 Apr, 2024</p>
            <p>3 Min Read</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Datascience;