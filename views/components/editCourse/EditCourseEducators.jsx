import React, { Component } from "react";
import EditCourseEducatorsController from "../../../controllers/components/editCourse/EditCourseEducatorsController";
import EditableTitle from "../editable/EditableTitle";
import SelectBox from "../global/SelectBox";
import styles from "./EditCourseEducators.module.css";

/**
* Props of EditCourseEducators Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseEducators extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseEducatorsController(this);
        this.state = {
            selected_edu_keys :[],
            selected_edus:[],
            educators:[],
        }
    }
    
    componentDidMount(){
    }
    
    render(){
        return(
            <div className={styles.con}>

                <EditableTitle
                title={"دبیر (یا دبیران) دوره"}
                status={"null"}
                onEdit={this.onEdit}
                onSubmit={this.onSubmit}
                onCancel={this.onCancel}/>

                <SelectBox className={styles.select_box}
                data={this.state.educators}
                onAdd={this.onAddEducator}
                onRemove={this.onRemoveEducator}/>

            </div>
        )
    }
}