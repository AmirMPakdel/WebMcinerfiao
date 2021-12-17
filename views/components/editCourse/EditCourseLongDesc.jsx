import React, { Component } from "react";
import styles from "./EditCourseLongDesc.module.css";
import EditCourseLongDescController from "../../../controllers/components/editCourse/EditCourseLongDescController";

/**
* Props of EditCourseLongDesc Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseLongDesc extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseLongDescController(this);
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