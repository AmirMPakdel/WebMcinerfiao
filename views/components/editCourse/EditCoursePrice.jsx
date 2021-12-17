import React, { Component } from "react";
import styles from "./EditCoursePrice.module.css";
import EditCoursePriceController from "../../../controllers/components/editCourse/EditCoursePriceController";

/**
* Props of EditCoursePrice Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCoursePrice extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCoursePriceController(this);
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