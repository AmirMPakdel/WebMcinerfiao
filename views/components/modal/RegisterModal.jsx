import React, { Component } from "react";
import MainButton from "../global/MainButton";
import styles from "./RegisterModal.module.css";
import TextInput from "../global/TextInput";

export default class RegisterModal extends Component {
    
    render(){
        return(
            <div className={styles.reg_con}>

                <div className={styles.reg_title}>{"ثبت نام"}</div>

                <TextInput className={styles.reg_input} placeholder={"نام"}/>

                <TextInput className={styles.reg_input} placeholder={"نام خانوادگی"}/>

                <TextInput className={styles.reg_input} placeholder={"شماره همراه"}/>

                <TextInput className={styles.reg_input} placeholder={"گذرواژه"}/>

                <TextInput className={styles.reg_input} placeholder={"تکرار گذرواژه"}/>

                <MainButton className={styles.btn} title={"ثبت نام"}/>

                <div className={styles.link1+" amp_btn"}>{"ورود به حساب کاربری"}</div>

                <img className={styles.close_btn+" amp_btn"} src={"./svg/modal_close.svg"}/>
                
            </div>
        )
    }
}