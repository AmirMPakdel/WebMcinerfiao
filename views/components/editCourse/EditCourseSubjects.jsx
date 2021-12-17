import React, { Component } from "react";
import styles from "./EditCourseSubjects.module.css";
import EditCourseSubjectsController from "../../../controllers/components/editCourse/EditCourseSubjectsController";

/**
* Props of EditCourseSubjects Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseSubjects extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseSubjectsController(this);
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