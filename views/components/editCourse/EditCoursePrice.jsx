import React, { Component } from "react";
import styles from "./EditCoursePrice.module.css";
import EditCoursePriceController from "../../../controllers/components/editCourse/EditCoursePriceController";
import EditableTitle from "../editable/EditableTitle";
import EditableText from "../editable/EditableText";

/**
* Props of EditCoursePrice Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCoursePrice extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCoursePriceController(this);
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
                title={"قیمت دوره"}
                status={st.price}
                onEdit={this.onEdit}
                onSubmit={this.onSubmit}
                onCancel={this.onCancel}/>

                <EditableText
                className={styles.edit_text}
                ref={r=>this.EditableText=r}
                maxLength={12}
                value={nw.price}
                oldValue={od.price}
                onChange={this.onChange}/>

            </div>
        )
    }
}