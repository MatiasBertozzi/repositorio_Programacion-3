import React from "react";
import "./Nav.css"
function Nav(props) {
    console.log(props.links);
    
    return(
        <React.Fragment>
            <div className="nav">
       <ul className="lista">
        {props.links.map((elm,idx)=> <li key={elm+idx}> {elm.name}</li>)}
        </ul>
         <p>The Movies</p>
         <img src=""/>
        </div>

        </React.Fragment>
    )
}

export default Nav