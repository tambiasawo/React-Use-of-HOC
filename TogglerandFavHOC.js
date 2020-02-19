import React from "react"
import {Component} from "react"

class Toggler extends Component
{
    state = {
        on: this.props.defaultOnValue
    }
    
    toggle = () =>{
        this.setState(prevState =>{
            return{
                on: !prevState.on
            }
        })
    }
    
    render(){
        const ReturnComp = this.props.component
        return(
            <ReturnComp on = {this.state.on} toggle = {this.toggle} {...this.props}/>
            
        )
    }
}
    export function TogglerandFavHOC(component, optionsObj){
        return(
            function(props){
                return(
                    <Toggler component = {component} defaultOnValue = {optionsObj.defaultOnValue}{...props}/>
                )
            }
        )
    }
    
