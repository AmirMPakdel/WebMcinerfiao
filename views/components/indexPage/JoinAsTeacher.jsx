import React, { Component } from "react";
import styles from "./JoinAsTeacher.module.css";
import MainButton from "../global/MainButton";
import SectionTitle from "./SectionTitle";

export default class JoinAsTeacher extends Component {
    
    render(){
        return(
            <div className={styles.jteach_con}>


                <SectionTitle title={"همکاری با ما"}/>

                <div className={styles.jteach_sec1}>

                    <img className={styles.jteach_img} src={"./img/joinus.jpg"}/>

                    <div className={styles.jteach_info_sec}>

                        <div className={styles.jteach_info_txt}>
                            {"عضویت در هیات علمی و تدریس در فرادرس، تدریس برای آرمان «دانش بدون مرز» است. در صورت تمایل به همکاری آموزشی، تدریس و ارایه آموزش در فرادرس و پیوستن به آن به عنوان عضو هیات علمی، به لینک زیر مراجعه نمایید."}
                        </div>

                        <div className={styles.jteach_btn_con}>
                            <MainButton title="اطلاعات بیشتر" left_arrow/>
                        </div>

                    </div>

                </div>
                
            </div>
        )
    }
}