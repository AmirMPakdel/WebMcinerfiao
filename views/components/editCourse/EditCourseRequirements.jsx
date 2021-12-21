import React, { Component } from "react";
import styles from "./EditCourseRequirements.module.css";
import EditCourseRequirementsController from "../../../controllers/components/editCourse/EditCourseRequirementsController";
import EditableTitle from "../editable/EditableTitle";

/**
* Props of EditCourseRequirements Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseRequirements extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseRequirementsController(this);
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
                title={"پیش نیاز های این دوره"}
                status={st.duration}
                onEdit={this.onEdit}
                onSubmit={this.onSubmit}
                onCancel={this.onCancel}/>

            </div>
        )
    }
}