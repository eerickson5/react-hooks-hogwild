//displays hog cards
import React from "react";
import Hog from "./Hog";
import FilterContainer from "./FilterContainer";

export default function HogsContainer({hogs}){
    const [greasedOnly, setGreasedOnly] = React.useState(true)

    const HogCards = hogs
    .filter( hog => {
        if(!greasedOnly) return true

        return hog.greased
    })
    .map( hog => {
        return(
            <Hog hog={hog} key={hog.name}/>
        )
    })

    return(
        <div>
            <FilterContainer 
            active={greasedOnly} 
            flipActive={() => setGreasedOnly(!greasedOnly)}
            />
            <ul className="ui grid container cards">
                {HogCards}
            </ul>
            
        </div>
        
    )
}