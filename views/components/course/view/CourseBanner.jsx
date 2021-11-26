import React, { Component } from "react";
import IconButton from "../../global/IconButton";
import MainButton from "../../global/MainButton";
import Price from "../../global/Price";
import VideoCard from "../../global/VideoCard";
import styles from "./CourseBanner.module.css";
import IconLine from "./IconLine";
import Rating from "./Rating";

export default class CourseBanner extends Component {
    
    render(){
        return(
            <>
                <div className={styles.back_img} style={{backgroundImage:`url(${"/fake_img/3.jpg"})`}}/>

                <div className={styles.title+" ftc1i btc1i tilt"}>
                    {" جامع ترین دوره آموزش فیزیک کوانتوم در آموزشگاه مهتا"}
                </div>

                <div className={styles.row1+"  flc1i cpnt"}>

                    <div>{"آخرین بروزرسانی : 1400/02/05"}</div>
                    <div>|</div>
                    <div>{"755,499 : شرکت کننده در دوره"}</div>
                    <div>|</div>
                    <div className={styles.rating_sec}>
                        <Rating className={styles.rating}/>
                        {"2.5 (466,551)"}
                    </div>
                    

                </div>

                <img className={styles.dashed} src={"/svg/wide_dashed.svg"}/>

                <div className={styles.row2+" flc1i bdyt"}>
                    {
                        "دوره از صفر صفر شروع خواهد شد! باهم نصب و تنظیم می کنیم و دوره شروع می شود. از مقدمات فیزیک شروع خواهیم کرد به تمام ابزار ها از مقدماتی تا حرفه ای و حتی فراتر خدمت شرکت کنندگان تدریس خواهد شد "
                    }
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
                    thumbnail={"/fake_img/3.jpg"}/>

                    <div className={styles.tablet_sec1+" flc1"}>

                        <IconLine icon={"/svg/crs_play_icn.svg"} text={txt1}/>

                        <IconLine icon={"/svg/crs_document_icn.svg"} text={txt2}/>

                        <IconLine icon_className={styles.download_icon} 
                        icon={"/svg/crs_download_icn.svg"} text={txt3}/>

                        <IconLine icon={"/svg/crs_complete_icn.svg"} text={txt4}/>

                    </div>

                    <img className={styles.dashed} src={"/svg/wide_dashed.svg"}/>
                    
                    <div className={styles.price_wrapper+" flc1"}>

                        <Price
                        offPercent={32}
                        orginalPrice={645000}
                        price={345000}/>

                    </div>

                    <img className={styles.dashed} src={"/svg/wide_dashed.svg"}/>

                    <MainButton className={styles.tablet_buy_btn} title={"افزودن به سبد خرید"}/>

                    <MainButton className={styles.tablet_buy_btn} title={"خرید سریع"}
                    whiteBorder={true} />

                </div>
            </>
        )
    }
}

const txt1 = "47 ساعت دوره";
const txt2 = "75 سرفصل دوره";
const txt3 = "38 منبع قابل دانلود";
const txt4 = "دوره به اتمام رسیده";