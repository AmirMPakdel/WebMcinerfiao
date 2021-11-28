import React, { Component } from "react";
import MainButton from "../global/MainButton";
import styles from "./ConclusionPage.module.css";
import NewCourseSelect from "../course/NewCourseSelect";
import { Checkbox } from "antd";
import SelectBox from "../global/SelectBox";
import chest from "../../../utils/chest";
import EducatorsSelectModal from "../modal/EducatorsSelectModal";

export default class ConclusionPage extends Component {

    state={
        educators:[
            {
                key:"1",
                title:"اکبر مبرا"
            },
            {
                key:"2",
                title:"محسن اژه ای"
            },
            {
                key:"3",
                title:"میلاد مهری"
            },
            {
                key:"4",
                title:"جواد اکبر پور"
            },
            {
                key:"5",
                title:"اکبر مبرا"
            },
            {
                key:"6",
                title:"محسن اژه ای"
            },
            {
                key:"7",
                title:"میلاد مهری"
            },
            {
                key:"8",
                title:"جواد اکبر پور"
            },
        ]
    }

    onCancelAddEducatorModal=()=>{
        chest.ModalLayout.controlModal(false);
    }

    onConfirmAddEducatorModal=()=>{
        
    }

    onAddEducator=()=>{
        this.EducatorsSelectModal = <EducatorsSelectModal onCancel={this.onCancelAddEducatorModal} onConfirm={this.onConfirmAddEducatorModal}/>;
        chest.ModalLayout.controlModal(true, this.EducatorsSelectModal, {});
    }

    onRemoveEducator=(obj)=>{

    }

    onCreate=()=>{
        window.location.href = "/edu/myCourses/edit";
    }
    
    render(){
        return(
        <>
        <div className={styles.con}>

            <div className={styles.sec_con}>
            
                <div className={styles.sec_title}>{"انتخاب دبیر"}</div>

                <div className={styles.info_sec1+" cpnt"}>{text1}</div>

                <SelectBox className={styles.select_box}
                data={this.state.educators}
                onAdd={this.onAddEducator}
                onRemove={this.onRemoveEducator}/>

            </div>

        </div>

        <div className={styles.wrapper2}>

            <MainButton className={styles.next_btn} 
            title={"ایجاد دوره"} 
            onClick={this.onCreate}/>

        </div>
        </>
        )
    }
}

const text1 = "در این قسمت مدرس(مدرسین) این دوره را مشخص کنید.";