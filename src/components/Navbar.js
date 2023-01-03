import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar" style={{ backgroundColor: 'red' }} >
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1"
                        style={{
                            color: 'white',
                            fontSize: '50px',
                            border: '2px solid black',
                            borderRadius: '30px',
                            padding: '10px'
                        }}
                    >
                        YouTube
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
