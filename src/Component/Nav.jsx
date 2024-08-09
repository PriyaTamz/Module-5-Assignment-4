import React from 'react'
import { Link, Outlet } from 'react-router-dom';


const Nav = () => {
    return (
        <div>
            <nav>
                <div className='navigation'>
                    <div>
                        <Link to="/">ALL</Link>
                    </div>
                    <div>
                        <Link to="/fullstack">FULL STACK DEVELOPMENT</Link>
                    </div>
                    <div>
                        <Link to="/datascience">DATA SCIENCE</Link>
                    </div>
                    <div>
                        <Link to="/cybersecurity">CYBER SECURITY</Link>
                    </div>
                    <div>
                        <Link to="/career">CAREER</Link>
                    </div>
                </div>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Nav;