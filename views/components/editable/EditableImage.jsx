import React, { Component } from "react";
import styles from "./EditableImage.module.css";
import EditableImageController from "../../../controllers/components/editCourse/EditCourseBackgrundController"

/**
* Props of EditableImage Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditableImage extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditableImageController(this);
        this.state = {
            image_url: null
        }
    }
    
    componentDidMount(){
    }

    onEdit(){

    }

    onSubmit(){

    }

    onCancel(){
        
    }
    
    render(){
        return(
            <div className={styles.con+" "+this.props.className}
            style={{
                backgroundImage: `url(${this.state.image_url})`
            }}>
                
            </div>
        )
    }
}