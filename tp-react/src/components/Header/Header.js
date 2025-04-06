import React from "react";
import Nav from "./Nav";
function Header() {
    
    let lista={
        home:"",
        favoritos:"",
        ver_todas:""
    }


    return(
        
        <React.Fragment>
       
        <Nav  links={lista}/>

        </React.Fragment>
    )
}

export default Header