import React from "react";
import "../../styles/Alert.css";

function Alert() {
    return (
        <div className="alert-form">
             <form className = "alert-section">
                <h2 className= "instructions"> Please enter your number to get local alerts directly to your phone.</h2>
                <input type="text" placeholder="123-456-7890"></input>
                <button>Submit</button>
                <p>Disclaimer about text rates and notifications go here.</p>
             </form>
        </div>
    );
}

export default Alert;