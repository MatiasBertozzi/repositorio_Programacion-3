import React from "react";
import Nav from "../Nav/Nav";
function Header() {
    
    let lista=[{name:"Home"},{name:"Favoritos"},{name:"Ver todas"}]
      
    return(
        
        <React.Fragment>
       
        <Nav  links={lista}/>

        </React.Fragment>
    )
}

export default Header