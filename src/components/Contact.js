import React from "react";

function Contact (){
    return (
        <div className="contact">
            <h2> contact </h2>
                
           
        <div className="form-content">
            <form action="results.html" method="GET">
                   <label>Name</label>
                        <input type="text" Placeholder="username"/>                               
                    <label>Email</label>
                        <input type="email" name="email" placeholder="example@.com" required/>
                    <label>Message</label>
                        <textarea></textarea>
                    <div className="submit">  
                        <button type="submit">Submit</button>
                    </div>
            </form>
        </div>
        </div>
    )
}
export default Contact;