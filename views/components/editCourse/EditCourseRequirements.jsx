import React, { Component } from "react";
import styles from "./EditCourseRequirements.module.css";
import EditCourseRequirementsController from "../../../controllers/components/editCourse/EditCourseRequirementsController";

/**
* Props of EditCourseRequirements Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseRequirements extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseRequirementsController(this);
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