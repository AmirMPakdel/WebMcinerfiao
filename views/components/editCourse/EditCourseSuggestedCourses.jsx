import React, { Component } from "react";
import styles from "./EditCourseSuggestedCourses.module.css";
import EditCourseSuggestedCoursesController from "../../../controllers/components/editCourse/EditCourseSuggestedCoursesController";

/**
* Props of EditCourseSuggestedCourses Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseSuggestedCourses extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseSuggestedCoursesController(this);
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