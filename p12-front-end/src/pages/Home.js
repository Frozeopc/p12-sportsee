import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
        <Link to={`/user/12`}>
                   
                        <em>Utilisateur</em> <em>12</em>
                   
                </Link>
                <Link to={"/user/18"}>
                    
                        <em>Utilisateur</em> <em>18</em>
                    
                </Link>
    </div>    
    )
}
export default Home;