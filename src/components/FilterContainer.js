//allows user to filter hog cards
import React from "react";

export default function FilterContainer({
    greasedActive, 
    flipGreasedActive, 
    currentSort, 
    onChangeCurrentSort
}){

    return(
        <div style={{paddingBottom: "15px"}}>
            
            <button 
            className={`ui button ${greasedActive ? "brown" : "basic grey"}`} 
            onClick={flipGreasedActive}>
                💩 Greased Only
            </button>


            <div class="ui buttons">
                <button 
                className={currentSort === "name" ? "ui button selected" : "ui button"}
                onClick={onChangeCurrentSort}
                name="name"
                >Sort By Name</button>

                <button 
                className={currentSort === "weight" ? "ui button selected" : "ui button"}
                onClick={onChangeCurrentSort}
                name="weight"
                >Sort by Weight</button>
            </div>
        </div>
    )
}