import React, { Component } from "react";
import styles from "./LoginModal.module.css";
import MainButton from "../global/MainButton";
import TextInput from "../global/TextInput";

export default class LoginModal extends Component {
    
    render(){
        return(
            <div className={styles.login_con}>

                <div className={styles.login_title}>{"ورود"}</div>

                <TextInput className={styles.login_input} placeholder={"شماره همراه"}/>

                <TextInput className={styles.login_input} placeholder={"گذرواژه"}/>

                <MainButton className={styles.btn} title={"ورود"}/>

                <div className={styles.sec1}>

                    <div className={styles.link1+" amp_btn"}>{"ثبت نام کنید"}</div>

                    <div>{"هنوز در اینجا ثبت نکرده‌اید؟"}</div>

                </div>

                <img className={styles.close_btn+" amp_btn"} src={"/svg/modal_close.svg"}/>
                
            </div>
        )
    }
}