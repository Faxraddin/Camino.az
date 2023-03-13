import React from "react";

export default function UnderText(){
    return(
        <div className="underText">
             <div className="underText-container">

                <p>Great platform for the job seeker that searching for <br></br> new career heights and passionate about startups.</p>
                <div className="underText-place">
                    <input placeholder="Job title or keywords"/>
                    <input placeholder="Country or city"/>
                    <button>Search my job</button>
                </div>
                <p>Popular : UI Designer, UX Researcher, Android, Admin</p>

             </div>
        </div>
    )
}