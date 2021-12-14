import React, { Component } from "react";
import EditableTitle from "../editable/EditableTitle";
import styles from "./EditCourseBackgrund.module.css";

/**
* Props of EditCourseBackgrund Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseBackgrund extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseBackgrundController(this);
        this.state = {
        
        }
    }
    
    componentDidMount(){
    }

    onEdit=()=>{

    }

    onSubmit=()=>{

    }

    onCancel=()=>{

    }
    
    render(){
        return(
            <div className={styles.con}>

                <EditableTitle
                title={"عکس پس زمینه دوره"}
                status={st.title}
                onEdit={this.onEdit}
                onSubmit={this.onSubmit}
                onCancel={this.onCancel}/>

                

                
            </div>
        )
    }
}