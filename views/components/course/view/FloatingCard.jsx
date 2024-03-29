import { Affix } from "antd";
import React, { Component } from "react";
import { minutes2Hours } from "../../../../utils/helpers";
import Course from "../../../dynamics/index/Course";
import MainButton from "../../global/MainButton";
import Price from "../../global/Price";
import VideoCard from "../../global/VideoCard";
import styles from "./FloatingCard.module.css";
import IconLine from "./IconLine";

/**
* Props of FloatingCard Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* @property {Course} parent
* 
* @extends {Component<Props>}
*/
export default class FloatingCard extends Component {
    
    render(){
        let ps = this.props.parent.state;
        let c = ps.course;
        return(
            <Affix offsetTop={40} style={{ position: 'absolute', top: 30, left: 15 }}>

                <div className={styles.fltcrd_con+" bglc1i "}>

                    <VideoCard className={styles.fltcrd_video}
                    uploadKey={c.intro_video.url}
                    playBtnClassName={styles.fltcrd_video_playbtn}/>

                    <div className={styles.fltcrd_sec1}>

                        <Price
                        offPercent={c.discount}
                        orginalPrice={c.price}
                        price={c.price}/>

                    </div>

                    <img className={styles.fltcrd_dash} src={"/svg/dash_line.svg"}/>

                    {/* <MainButton className={styles.fltcrd_btn1} title={"افزودن به سبد خرید"}/>

                    <MainButton className={styles.fltcrd_btn2} title={"خرید سریع"} borderMode/> */}
                    <MainButton className={styles.fltcrd_btn2} title={"خرید"}/>

                    <div className={styles.space1}/>

                    <IconLine icon={"/svg/crs_play_icn.svg"} text={minutes2Hours(c.duration)+" ساعت دوره"}/>

                    <IconLine icon={"/svg/crs_document_icn.svg"} text={c.headings.length+" سرفصل دوره"}/>

                    <IconLine icon_className={styles.download_icon} 
                    icon={"/svg/crs_download_icn.svg"} text={c.contents.length+" محتوای قابل دانلود"}/>

                    {/* <IconLine icon={"/svg/crs_complete_icn.svg"} text={txt4}/> */}

                </div>

            </Affix>
        )
    }
}

const txt1 = "47 ساعت دوره";
const txt2 = "75 سرفصل دوره";
const txt3 = "38 منبع قابل دانلود";
const txt4 = "دوره به اتمام رسیده";