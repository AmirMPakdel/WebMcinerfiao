import React, { Component } from "react";
import EditCourseIntroVideoController from "../../../controllers/components/editCourse/EditCourseIntroVideoController";
import EditableTitle from "../editable/EditableTitle";
import EditableVideo from "../editable/EditableVideo";
import styles from "./EditCourseIntroVideo.module.css";

/**
* Props of EditCourseIntroVideo Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseIntroVideo extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseIntroVideoController(this);
        this.state = {
        
        }
    }
    
    componentDidMount(){
    }

    onEdit=()=>{

        this.controller.onEdit();
    }

    onSelect=()=>{
        
        this.controller.onSelect();
    }

    onSubmit=()=>{

        this.controller.onSubmit(this.EditableImage.state.image_file);
    }

    onCancel=()=>{

        this.controller.onCancel();
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
                title={"ویدیو معرفی دوره"}
                status={st.cover}
                onEdit={this.onEdit}
                onSubmit={this.onSubmit}
                onCancel={this.onCancel}/>

                <EditableVideo
                ref={r=>this.EditableImage=r}
                onSelect={this.onSelect}
                className={styles.video}
                defaultPoster={"/default_img/default_intro_video.png"}
                uploadKey={nw.cover}
                oldUploadKey={od.cover}/>
                
            </div>
        )
    }
}