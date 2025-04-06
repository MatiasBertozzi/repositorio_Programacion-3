import React from "react";

function Nav(props) {
    return(
        <React.Fragment>
       <ul>
        {props.links.map((elm,idx)=> <li key={elm+idx}> {elm}</li>)}
        <p>Da Movies</p>
        </ul>

        </React.Fragment>
    )
}

export default Nav