import { Affix } from "antd";
import React, { Component } from "react";
import MainButton from "../../global/MainButton";
import styles from "./FloatingCard.module.css";
import IconLine from "./IconLine";

export default class FloatingCard extends Component {
    
    render(){
        return(
            <Affix offsetTop={40} style={{ position: 'absolute', top: 100, left: 40 }}>

                <div className={styles.fltcrd_con}>

                    <img className={styles.fltcrd_img} src={"./fake_img/20.jpg"}/>

                    <div className={styles.fltcrd_sec1}>

                        {"تومان"}

                        <div className={styles.fltcrd_price}>{"360,000"}</div>

                    </div>

                    <img className={styles.fltcrd_dash} src={"./svg/dash_line.svg"}/>

                    <MainButton className={styles.fltcrd_btn1} title={"افزودن به سبد خرید"}/>

                    <MainButton className={styles.fltcrd_btn2} title={"خرید سریع"} border_mode/>

                    <div className={styles.space1}/>

                    <IconLine icon={"./svg/crs_play_icn.svg"} text={txt1}/>

                    <IconLine icon={"./svg/crs_document_icn.svg"} text={txt2}/>

                    <IconLine icon_className={styles.download_icon} 
                    icon={"./svg/crs_download_icn.svg"} text={txt3}/>

                    <IconLine icon={"./svg/crs_complete_icn.svg"} text={txt4}/>

                </div>

            </Affix>
        )
    }
}

const txt1 = "47 ساعت دوره";
const txt2 = "75 سرفصل دوره";
const txt3 = "38 منبع قابل دانلود";
const txt4 = "دوره به اتمام رسیده";