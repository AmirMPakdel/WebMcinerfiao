import React, { Component } from "react";
import styles from "./Aboutus.module.css";
import MainButton from "../global/MainButton";
import SectionTitle from "./SectionTitle";

export default class Aboutus extends Component {
    
    render(){
        return(
            <div className={styles.aboutus_con}>

                <SectionTitle title={"همکاری با ما"}/>

                <div className={styles.aboutus_sec1}>

                    <div className={styles.aboutus_info_sec}>

                        <div className={styles.aboutus_info_txt}>
                            {txt}
                        </div>

                    </div>

                    <img className={styles.aboutus_img} src={"./img/aboutus.jpg"}/>

                </div>
                
            </div>
        )
    }
}

const txt = "فنجون با شعار ارائه طراحی مدرن و راهکارهای نوین ساخت سایت و اپلیکیشن کار خود را آغاز کرد. ابتدا تا انتها و تحویل آن به مشتری . توجه به کیفیت، ارائه ی بهترین و مرتبط ترین طراحی‌ها و همچنین بکار بردن متد مبتکرانه برای ایجاد بالاترین کیفیت از محاسن فنجون محسوب می گردد. آنچه ما را از دیگران متفاوت می سازد تضمین خدمات و ارائه بهترین کیفیت است. ما ارائه ی نوین و متفاوتی را برایتان به ارمغان خواهیم آورد و زیبائی ها را با چشمانتان تقسیم خواهیم نمود. کارشناسان و متخصصان ما در بخش پشتیبانی فنجون همواره آماده پاسخگوئی به پرسشهای شما عزیزان می باشند. "