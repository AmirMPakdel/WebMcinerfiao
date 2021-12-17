import React, { Component } from "react";
import styles from "./EditCourseReleaseDate.module.css";
import EditCourseReleaseDateController from "../../../controllers/components/editCourse/EditCourseReleaseDateController";

/**
* Props of EditCourseReleaseDate Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseReleaseDate extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseReleaseDateController(this);
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