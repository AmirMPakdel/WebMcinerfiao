import React, { Component } from "react";
import styles from "./EditCourseShortDesc.module.css";
import EditCourseShortDescController from "../../../controllers/components/editCourse/EditCourseShortDescController";

/**
* Props of EditCourseShortDesc Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseShortDesc extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseShortDescController(this);
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