import React from "react"
import {TogglerandFavHOC} from "./TogglerandFavHOC"

function Menu (props) {
        return (
            <div>
                <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu </button>
                <nav style={{display: props.on ? "block" : "none"}}>
                    <h6>Signed in as Coder123</h6>
                    <a>Your Profile</a>
                    <a>Your Repositories</a>
                    <a>Your Stars</a>
                    <a>Your Gists</a>
                </nav>
            </div>
        ) 
    }


export default TogglerandFavHOC(Menu, {defaultOnValue: false})
