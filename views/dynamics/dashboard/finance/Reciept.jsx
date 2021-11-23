import React, { Component } from "react";
import MainButton from "../../../components/mainPage/MainButton";
import EducatorDashboardLayout from "../../../layouts/EducatorDashboardLayout";
import styles from "./receipt.module.css";

export default class receipt extends Component {
    
    onBack = ()=>{
        window.history.back();
    }

    render(){
        return(
            <EducatorDashboardLayout>
            
                <div className={styles.header_sec}>

                    <div className={styles.header_title}>{"فاکتور خرید"}</div>

                    <MainButton border_mode title={"بازگشت"} onClick={this.onBack}/>

                </div>

                <div className={styles.ordrcp_con}>

                    <div className={styles.card1}>

                        <div className={styles.c1_title}>{"محصول"}</div>

                        <ListItem title={"جامع ترین دوره آموزش ایلاستریتور (مقدماتی ، پیشرفته و استادی)"}
                        price={"598,000"}/>
                        <ListItem title={"جامع ترین دوره آموزش فتوشاپ (مقدماتی ، پیشرفته و استادی)"}
                        price={"522,000"}/>

                    </div>

                    <div className={styles.card2}> 

                        <div className={styles.c2_title}>{"کاربر"}</div>
                        <div className={styles.c2_space}/>
                        <div className={styles.c2_price}>{"علیرضا رمضانی"}</div>
                        
                    </div>

                    <div className={styles.card2}> 

                        <div className={styles.c2_title}>{"مجموع سبد خرید"}</div>
                        <div className={styles.c2_space}/>
                        <div className={styles.c2_price}>{"598,000 تومان"}</div>
                        
                    </div>

                    <div className={styles.card2}>

                        <div className={styles.c2_title}>{"میزان تخفیف"}</div>
                        <div className={styles.c2_space}/>
                        <div className={styles.c2_price}>{"0 تومان"}</div>

                    </div>
                    
                    <div className={styles.card2}>

                        <div className={styles.c2_title}>{"روش پرداخت"}</div>
                        <div className={styles.c2_space}/>
                        <div className={styles.c2_price}>{"پرداخت امن زرین پال"}</div>

                    </div>

                    <div className={styles.card2}>

                        <div className={styles.c2_title}>{"تاریخ خرید"}</div>
                        <div className={styles.c2_space}/>
                        <div className={styles.c2_price}>{"1400/01/05"}</div>

                    </div>

                    <div className={styles.card2}>

                        <div className={styles.c2_title}>{"قیمت نهایی"}</div>
                        <div className={styles.c2_space}/>
                        <div className={styles.c2_price}>{"598,000 تومان"}</div>

                    </div>
                    
                </div>

            </EducatorDashboardLayout>
        )
    }
}

function ListItem(props){

    return(
        <div className={styles.item_con}>
            <div className={styles.c2_title}>{props.title}</div>
            <div className={styles.c2_space}/>
            <div className={styles.c2_price}>{" تومان "+props.price}</div>
        </div>
    )
}