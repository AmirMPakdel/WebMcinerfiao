import React, { Component } from "react";
import MainButton from "../global/MainButton";
import TextInput from "../global/TextInput";
import styles from "./ConfirmModal.module.css";

export default class ConfirmModal extends Component {
    
    render(){
        return(
            <div className={styles.confirm_con}>

                <div className={styles.confirm_title}>{"تایید شماره تلفن همراه"}</div>

                <div className={styles.txt1}>{"کدی که از طریق پیامک برای شما ارسال شده است را در کادر زیر وارد نمایید."}</div>

                <TextInput className={styles.confirm_input} placeholder={"کد تایید"}/>

                

                <div className={styles.sec1}>

                    <div>{"01 : 36"}</div>

                    <div className={styles.link1+" amp_btn"}>{"ارسال دوباره کد"}</div>

                </div>

                <MainButton className={styles.btn} title={"تایید"}/>

                <img className={styles.close_btn+" amp_btn"} src={"./svg/modal_close.svg"}/>
                
            </div>
        )
    }
}