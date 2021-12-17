import React, { Component } from "react";
import styles from "./EditCourseTags.module.css";
import EditCourseTagsController from "../../../controllers/components/editCourse/EditCourseTagsController";

/**
* Props of EditCourseTags Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseTags extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseTagsController(this);
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