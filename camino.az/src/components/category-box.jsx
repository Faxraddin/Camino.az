import React from "react";
import icon from './iconn.png'

export default function CategoryBox(props){
    return(
        <div className="category-box">
            <div className="categoryBox-container">
                <img src={icon} className='icon'/>
                <h3>Design</h3>
                <p>235 jobs available</p>
            </div>
        </div>
    )
}