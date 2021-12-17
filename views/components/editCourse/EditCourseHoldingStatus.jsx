import React, { Component } from "react";
import styles from "./EditCourseHoldingStatus.module.css";
import EditCourseHoldingStatusController from "../../../controllers/components/editCourse/EditCourseHoldingStatusController";

/**
* Props of EditCourseHoldingStatus Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseHoldingStatus extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseHoldingStatusController(this);
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