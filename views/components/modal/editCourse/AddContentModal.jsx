import React, { Component } from "react";
import AddContentController from "../../../../controllers/modals/editCourse/AddContentController";
import EditCourseContents from "../../editCourse/EditCourseContents";
import styles from "./AddContentModal.module.css";

/**
* Props of AddContentModal Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* @property {EditCourseContents} parent
* @property {{id:number, title:string}} heading
* @property {"video"|"audio"|"text"} type
* 
* @extends {Component<Props>}
*/
export default class AddContentModal extends Component {
    
    constructor(props){
        super(props);
        this.controller = new AddContentController(this);
        this.state = {
        
        }
    }
    
    componentDidMount(){
    }
    
    render(){
        return(
            <div className={styles.con+" bglc1 "}>
                
            </div>
        )
    }
}