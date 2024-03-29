import React, { Component } from "react";
import { minutes2Hours } from "../../../../utils/helpers";
import myServer from "../../../../utils/myServer";
import { priceFormat } from "../../../../utils/price";
import Course from "../../../dynamics/index/Course";
import IconButton from "../../global/IconButton";
import MainButton from "../../global/MainButton";
import Price from "../../global/Price";
import VideoCard from "../../global/VideoCard";
import styles from "./CourseBanner.module.css";
import IconLine from "./IconLine";
import Rating from "./Rating";

/**
* Props of CourseBanner Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* @property {Course} parent
* 
* @extends {Component<Props>}
*/
export default class CourseBanner extends Component {
    
    render(){
        let ps = this.props.parent.state;
        let c = ps.course;
        return(
            <>
                <div className={styles.back_img} style={{backgroundImage:`url(${myServer.MediaFiles.publicImage(c.cover)})`}}/>

                <div className={styles.title+" ftc1i btc1i tilt"}>
                    {c.title}
                </div>

                <div className={styles.row1+"  flc1i cpnt"}>

                    <div>{"آخرین بروزرسانی : 1400/02/05"}</div>
                    <div>|</div>
                    <div>{"شرکت کننده در دوره"+ " : " +priceFormat(c.sells)}</div>
                    <div>|</div>
                    <div className={styles.rating_sec}>
                        <Rating className={styles.rating} rate={c.score}/>
                        {c.score+" (466,551)"}
                    </div>
                    

                </div>

                <img className={styles.dashed} src={"/svg/wide_dashed.svg"}/>

                <div className={styles.row2+" flc1i bdyt"}>
                    {c.short_desc}
                </div>

                <img className={styles.dashed+" "+styles.dashed2} src={"/svg/wide_dashed.svg"}/>

                <div className={styles.row3}>

                    <IconButton className={styles.tablet_icon_btn} borderMode
                    icon={"/svg/send.svg"} title={"به اشتراک گذاری"}/>

                    <IconButton className={styles.tablet_icon_btn} borderMode
                    icon={"/svg/empty_fav.svg"} title={"افزودن به علاقمندی ها"}/>

                </div>

                <div className={styles.tablet_sec}>

                    <img className={styles.dashed} src={"/svg/wide_dashed.svg"}/>

                    <VideoCard className={styles.tablet_video}
                    uploadKey={c.intro_video.url}/>

                    <div className={styles.tablet_sec1+" flc1"}>

                        <IconLine icon={"/svg/crs_play_icn.svg"} text={minutes2Hours(c.duration)+" ساعت دوره"}/>

                        <IconLine icon={"/svg/crs_document_icn.svg"} text={c.headings.length+" سرفصل دوره"}/>

                        <IconLine icon_className={styles.download_icon} 
                        icon={"/svg/crs_download_icn.svg"} text={c.contents.length+" محتوای قابل دانلود"}/>

                        {/* <IconLine icon={"/svg/crs_complete_icn.svg"} text={txt4}/> */}

                    </div>

                    <img className={styles.dashed} src={"/svg/wide_dashed.svg"}/>
                    
                    <div className={styles.price_wrapper+" flc1"}>

                        <Price
                        offPercent={c.discount}
                        orginalPrice={c.price}
                        price={c.price}/>

                    </div>

                    <img className={styles.dashed} src={"/svg/wide_dashed.svg"}/>

                    {/* <MainButton className={styles.tablet_buy_btn} title={"افزودن به سبد خرید"}/> */}

                    {/* <MainButton className={styles.tablet_buy_btn} title={"خرید سریع"}
                    whiteBorder={true}/> */}

                    <MainButton className={styles.tablet_buy_btn} title={"خرید"}
                    whiteBorder={false}/>

                </div>
            </>
        )
    }
}

const txt1 = "47 ساعت دوره";
const txt2 = "75 سرفصل دوره";
const txt3 = "38 منبع قابل دانلود";
const txt4 = "دوره به اتمام رسیده";