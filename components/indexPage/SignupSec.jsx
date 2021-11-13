import React, { Component } from "react";
import MainButton from "../global/MainButton";
import styles from "./SignupSec.module.css";

export default class SignupSec extends Component {
    
    render(){
        return(
            <div className={styles.sgnupsec_con}>

                <div className={styles.sgnupsec_info_sec}>

                    <div className={styles.sgnupsec_info_title}>
                        {"می‌دانیم شنبه‌ها اهمیت خاصی ندارند"}
                    </div>

                    <div className={styles.sgnupsec_info_txt}>
                        {"در نتیجه سعی کنید از دوشنبه و حتی سه‌شنبه شروع کنید تا ما در یاری رساندن به شما از موارد فوق بتوانیم جویای نام و احوالتان از سوی وزارت خانه سحر و جادو شویم. با تشکر لطفا کلید زیر را فشار دهید."}
                    </div>

                    <div className={styles.sgnupsec_btn_con}>
                        <MainButton title="ثبت نام کنید" left_arrow/>
                    </div>

                </div>

                <img className={styles.sgnupsec_img} src={"./svg/signup_intro_img.svg"}/>
                
            </div>
        )
    }
}