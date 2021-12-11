import React, { Component } from "react";
import EditTitleController from "../../../controllers/components/editCourse/EditTitleController";
import EditabeText from "../editable/EditableText";
import EditableTitle from "../editable/EditableTitle";
import IconButton from "../global/IconButton";
import styles from "./EditCourseTitle.module.css";

/**
* Props of EditCourseTitle Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseTitle extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditTitleController(this);
        this.state = {
        
        }
    }
    
    componentDidMount(){
        
    }
    
    render(){
        return(
            <div className={styles.con}>

                <EditableTitle
                title={"عنوان دوره"}>

                    <IconButton style={{marginTop:"0"}}
                    title={"ویرایش"}/>

                </EditableTitle>

                <EditabeText
                />
                
            </div>
        )
    }
}