import React from "react"
import {TogglerandFavHOC} from "./TogglerandFavHOC"

function Favorite(props)
{
        return (
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span 
                        onClick={props.toggle}
                    >
                        {props.on ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        ) 
    }


export default TogglerandFavHOC(Favorite, {defaultOnValue: false})
