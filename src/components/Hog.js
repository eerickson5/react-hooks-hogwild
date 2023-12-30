//displays hog card
import React from "react";
//import {Card} from "semantic-ui-css"

export default function Hog({hog}){
    const [isExpanded, setIsExpanded] = React.useState(false)

    let dynamicContent = null

    if(isExpanded){
        const greasedString = hog.greased ? "💩 Greased" : "🧼 Clean"
        dynamicContent = <div className="extra content">

            <div>
                <span className="ui right floated">
                    <p>🐽 {hog.specialty}</p>
                </span>
                <span>
                    <p>🏅 {hog["highest medal achieved"]}</p>
                </span>
            </div>
        

            <div>
                <span className="ui right floated">
                    <p>⚖️ {hog.weight}</p>
                </span>
                <span>
                    <p>{greasedString}</p>
                </span>
            </div>
      </div>
    }

    return(
        <div className="ui card pigTile" onClick={() => setIsExpanded(!isExpanded)}>
            <div className="image">
                <img src={hog.image} alt={hog.name}/>
            </div>
            <div className="content">
                <h2 className="ui header">{hog.name}</h2>
                {dynamicContent}
            </div>
        </div>
    )
}