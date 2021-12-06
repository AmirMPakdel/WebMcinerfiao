import React, { Component } from "react";
import AskDeleteEducatorController from "../../../../controllers/modals/educators/AskDeleteEducatorController";
import chest from "../../../../utils/chest";
import Loading from "../../global/Loading";
import MainButton from "../../global/MainButton";
import EducatorsCrudModal from "../EducatorsCrudModal";
import styles from "./AskDeleteEducatorModal.module.css";

/**
* Props of AskDeleteEducatorModal Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class AskDeleteEducatorModal extends Component {

    constructor(props){
        super(props);

        this.controller = new AskDeleteEducatorController(this);

        this.state={
            loading:false,
        }
    }

    componentDidMount(){
        console.log(this.props.data);
    }
    

    onCancel=()=>{
        let modal = <EducatorsCrudModal editable={true}/>
        chest.ModalLayout.controlModal(true, modal);
    }

    onDelete=()=>{
        this.controller.confirmDelete();
    }
    
    render(){

        let d = this.props.data;
        let title = "آیا میخواهید دبیر با نام " +d.first_name+" "+d.last_name+" را از لیست دبیران خود حذف کنید؟";

        return(
            <div className={styles.con+" bglc1 btc2 lg_card_shd"}>

                {
                    this.state.loading?
                    <Loading scale={0.8}/>:null
                }
                {
                    !this.state.loading?
                    <>
                        <div className={styles.title+" tilt"}>{title}</div>

                        <div className={styles.sec1}>

                            <MainButton className={"bgec"}
                            titleClassName={"flc1i"}
                            title={"حذف"}
                            onClick={this.onDelete}/>

                            <MainButton className={""} 
                            title={"انصراف"}
                            borderMode={true}
                            onClick={this.onCancel}/>

                        </div>
                    </>:null
                }

            </div>
        )
    }
}