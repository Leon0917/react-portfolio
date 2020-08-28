import React from "react";
import {Link} from "react-router-dom"

function Header(){
    return(
        
        <div className="container">
        
        <div className="header">
            <h1> Leon Carnagie</h1>
                <ol>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ol>  
        </div>
    </div> 
    )
}
export default Header;