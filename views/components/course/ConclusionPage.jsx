import React, { Component } from "react";
import MainButton from "../global/MainButton";
import styles from "./ConclusionPage.module.css";
import SelectBox from "../global/SelectBox";
import chest from "../../../utils/chest";
import EducatorsCrudModal from "../modal/educators/EducatorsCrudModal";

export default class ConclusionPage extends Component {

    state={
        selected_edu_keys :[],
        selected_edus:[],
        educators:[],
    }

    onCancelAddEducatorModal=()=>{
        chest.ModalLayout.controlModal(false);
    }

    EducatorsCrudModalConfirm=(selectedRowKeys, selectedRows)=>{
        this.setState({
            selected_edu_keys:selectedRowKeys,
            selected_edus: selectedRows,
            educators: selectedRows2Educators(selectedRows),
        }, ()=>{
            this.EducatorsCrudModalCancel();
        });
    }

    EducatorsCrudModalCancel=()=>{ 
        chest.ModalLayout.hideModal();
    }

    onAddEducator=()=>{

        let modal = <EducatorsCrudModal 
        selectable={true} 
        selectionType={"checkbox"}
        selectedRowKeys={this.state.selected_edu_keys}
        selectedRows={this.state.selected_edus}
        onConfirm={this.EducatorsCrudModalConfirm}
        onCancel={this.EducatorsCrudModalCancel}/>;

        console.log(modal);

        chest.ModalLayout.setModal(1, modal, ()=>{
            chest.ModalLayout.visibleToggle(1, true);
        });
        
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

function selectedRows2Educators(rows){
    return [];
}