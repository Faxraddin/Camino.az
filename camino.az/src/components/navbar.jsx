import React,{useState} from "react";
import { Link,useMatch,useResolvedPath } from "react-router-dom";
import logo from './logo.png'

export default function Nav(props){

    const{page,setPage} = useState()

    return(
        <div className="navbar">
            <div className="navbar-container">

                <div className="navbar-pages">
                    <img src={logo} width={'50vw'}/>
                    <Link to='/'>Camino</Link>
                    <Link to='/findJob'>Find Job</Link>
                </div>

                <div className="navbar-login">
                    <button>Login</button>
                    <button id="sp1">Sign Up</button>
                </div>
            </div>

        </div>
    )
}