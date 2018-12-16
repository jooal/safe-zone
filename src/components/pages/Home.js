import React from "react";
import "../../styles/Home.css"; 

function Home() {
    return (
        <div>
            <header className = "header">
                <h1 className = "title">Safe Zone</h1>
                <h4 className = "intro">Be aware of your surroundings. Stay safe with Safe Zone.</h4>
            </header>

            <div className="map-location">
            <img alt="" width="700px" height="600px"></img>
        
            </div>
        </div>
    );
}

export default Home;