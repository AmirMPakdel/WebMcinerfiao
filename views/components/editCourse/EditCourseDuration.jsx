import React, { Component } from "react";
import styles from "./EditCourseDuration.module.css";
import EditCourseDurationController from "../../../controllers/components/editCourse/EditCourseDurationController";
import EditableTitle from "../editable/EditableTitle";
import EditableText from "../editable/EditableText";

/**
* Props of EditCourseDuration Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseDuration extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseDurationController(this);
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
                title={"مدت زمان آموزش"}
                status={st.duration}
                onEdit={this.onEdit}
                onSubmit={this.onSubmit}
                onCancel={this.onCancel}/>

                <EditableText
                className={styles.edit_title}
                ref={r=>this.EditableText=r}
                maxLength={64}
                value={nw.duration}
                oldValue={od.duration}
                onChange={this.onChange}/>

            </div>
        )
    }
}