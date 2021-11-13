import React, { Component } from "react";
import styles from "./CourseBanner.module.css";
import Rating from "./Rating";

export default class CourseBanner extends Component {
    
    render(){
        return(
            <>

                <div className={styles.back_img} style={{backgroundImage:`url(${"./fake_img/19.jpg"})`}}/>

                <div className={styles.title}>
                    {"جامع ترین دوره آموزش فیزیک کوانتوم"}
                </div>

                <div className={styles.row1}>

                    <div>{"آخرین بروزرسانی:1400/02/05"}</div>
                    <div>|</div>
                    <div>{"755,499 شرکت کننده در دوره"}</div>
                    <div>|</div>
                    <div>{"2.5 (466,551)"}</div>
                    <Rating className={styles.rating}/>

                </div>

                <img className={styles.dashed} src={"./svg/wide_dashed.svg"}/>

                <div className={styles.row2}>
                    {
                        "دوره از صفر صفر شروع خواهد شد! باهم نصب و تنظیم می کنیم و دوره شروع می شود. از مقدمات فیزیک شروع خواهیم کرد به تمام ابزار ها از مقدماتی تا حرفه ای و حتی فراتر خدمت شرکت کنندگان تدریس خواهد شد "
                    }
                </div>

                <img className={styles.dashed} src={"./svg/wide_dashed.svg"}/>

                <div className={styles.row3}>

                    <BorderIconButton icon={"./svg/send.svg"} title={"به اشتراک گذاری"}/>

                    <BorderIconButton icon={"./svg/empty_fav.svg"} title={"افزودن به علاقمندی ها"}/>

                </div>
                
            </>
        )
    }
}

class BorderIconButton extends Component{
    render(){
        return(
            <div className={styles.bricbtn_con+" amp_btn"}>

                <img className={styles.bricbtn_icon} src={this.props.icon}/>

                <div className={styles.bricbtn_title} >{this.props.title}</div>

            </div>
        )
    }
}