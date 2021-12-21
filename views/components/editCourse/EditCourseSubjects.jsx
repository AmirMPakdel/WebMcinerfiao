import React, { Component } from "react";
import styles from "./EditCourseSubjects.module.css";
import EditCourseSubjectsController from "../../../controllers/components/editCourse/EditCourseSubjectsController";
import EditableTitle from "../editable/EditableTitle";

/**
* Props of EditCourseSubjects Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseSubjects extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseSubjectsController(this);
        this.state = {
        
        }
    }
    
    componentDidMount(){
    }
    
    onEdit=()=>{
        this.controller.onEdit()
    }

    onSubmit=()=>{        
        this.controller.onSubmit();
    }

    onCancel=()=>{
        this.controller.onCancel();
    }
    
    onChange=(t)=>{
        this.controller.onChange(t);
    }

    render(){
        let p = this.props.parent;
        let ps = p.state;
        let st = ps.status;
        let od = ps.old_values;
        let nw = ps.new_values;

        return(
            <div className={styles.con}>

                <EditableTitle
                title={"مواردی که در این دوره آموزش داده خواهد شد"}
                status={st.duration}
                onEdit={this.onEdit}
                onSubmit={this.onSubmit}
                onCancel={this.onCancel}/>

            </div>
        )
    }
}