import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <h1>"Art washes away from the soul,
                the dust of everday life." -Picasso
            </h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/slider">Gallery</Link>
            </nav>
        </div>
    )
}
export default Header;