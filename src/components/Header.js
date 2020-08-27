import React from "react";
import {Link} from "react-dom"
function Header(){
    return(
        
        <div className="container">
        
        <div className="header">
            <h1> Leon Carnagie</h1>
                <ol>
                    <li><a href="index.html">about</a></li>
                    <li><a href="portfolio.html">portfolio</a></li>
                    <li><a href="contact.html">contact</a></li>
                </ol>  
        </div>
    </div> 
    )
}
export default Header;