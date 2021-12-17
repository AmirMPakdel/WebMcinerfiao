import React, { Component } from "react";
import styles from "./EditCourseGroups.module.css";
import EditCourseGroupsController from "../../../controllers/components/editCourse/EditCourseGroupsController";

/**
* Props of EditCourseGroups Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseGroups extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseGroupsController(this);
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