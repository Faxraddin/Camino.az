import React from "react";
import Nav from "./navbar";
import UnderText from "./header-underText";
import Cat from "./categoryy";
import Layout from "../layout";

export default function Header(){
    return(
        <section>
            <div className="header">  
                <UnderText/>
            </div>
            <Cat/>
        </section>
    )
}