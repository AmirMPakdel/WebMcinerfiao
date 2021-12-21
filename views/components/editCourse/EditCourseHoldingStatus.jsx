import React, { Component } from "react";
import styles from "./EditCourseHoldingStatus.module.css";
import EditCourseHoldingStatusController from "../../../controllers/components/editCourse/EditCourseHoldingStatusController";
import EditableTitle from "../editable/EditableTitle";

/**
* Props of EditCourseHoldingStatus Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseHoldingStatus extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseHoldingStatusController(this);
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
                title={"وضعیت انتشار دوره"}
                status={st.duration}
                onEdit={this.onEdit}
                onSubmit={this.onSubmit}
                onCancel={this.onCancel}/>

            </div>
        )
    }
}