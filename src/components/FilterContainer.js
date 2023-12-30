//allows user to filter hog cards
import React from "react";

export default function FilterContainer({active, flipActive}){

    return(
        <div>
            <div 
            className={`ui button ${active ? "green" : "basic grey"}`} 
            onClick={flipActive}>
                💩 Greased Only
            </div>
        </div>
    )
}