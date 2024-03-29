import React, { Component } from "react";
import chest from "../../../../utils/chest";
import EditCourseContents from "../../editCourse/EditCourseContents";
import AddContentModal from "./AddContentModal";
import styles from "./NewContentTypeModal.module.css";

/**
* Props of NewContentTypeModal Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* @property {EditCourseContents} parent
* 
* @extends {Component<Props>}
*/
export default class NewContentTypeModal extends Component {
    
    constructor(props){
        super(props);
        this.state = {
        
        }
    }
    
    componentDidMount(){
    }

    onCancel=()=>{

        chest.ModalLayout.closeAndDelete(1);
    }

    onVideo=()=>{
        
        let modal = <AddContentModal heading={this.props.heading} parent={this.props.parent} type={"video"}/>

        chest.ModalLayout.setModal(2, modal, ()=>{

            chest.ModalLayout.visibleToggle(2, this.onCancel);
        });
    }

    onAudio=()=>{

        let modal = <AddContentModal heading={this.props.heading} parent={this.props.parent} type={"audio"}/>

        chest.ModalLayout.setModal(2, modal, ()=>{

            chest.ModalLayout.visibleToggle(2, this.onCancel);
        });
    }

    onText=()=>{

        let modal = <AddContentModal heading={this.props.heading} parent={this.props.parent} type={"text"}/>

        chest.ModalLayout.setModal(2, modal, ()=>{

            chest.ModalLayout.visibleToggle(2, this.onCancel);
        });
    }
    
    render(){
        let type_btn = styles.type_btn + " bgtc1 btc2 tilt amp_btn"
        return(
            <div className={styles.con+" bglc1 "}>

                <img className={styles.close_btn + " bglc1 amp_btn md_card_shd"} 
                src={"/svg/modal_close.svg"}
                onClick={this.onCancel}/>

                <div className={styles.title+" tilt"}>{"نوع محتوای جدید را انتخاب کنید."}</div>

                <div className={type_btn} onClick={this.onVideo}>{"فایل ویدیویی"} <span>{"(mp4)"}</span> </div>

                <div className={type_btn} onClick={this.onAudio}>{"فایل صوتی"} <span>{"(mp3)"}</span> </div>

                <div className={type_btn} onClick={this.onText}>{"فایل متنی"} <span>{"(pdf)"}</span> </div>
                
            </div>
        )
    }
}