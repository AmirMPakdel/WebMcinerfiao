import React, { Component } from "react";
import styles from "./EditCourseDuration.module.css";
import EditCourseDurationController from "../../../controllers/components/editCourse/EditCourseDurationController";

/**
* Props of EditCourseDuration Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseDuration extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseDurationController(this);
        this.state = {
        
        }
    }
    
    componentDidMount(){
    }
    
    render(){
        return(
            <div>
                
            </div>
        )
    }
}