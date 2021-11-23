import React, { Component } from "react";
import MainButton from "../../../components/global/MainButton";
import styles from "./UserPanelTabOrderReceipt.module.css";

export default class UserPanelTabOrderReceipt extends Component {
    
    render(){
        return(
            <>
            <div className={styles.header_sec}>

                <div className={styles.header_title}>{"جزئیات سفارش"}</div>

                <MainButton border_mode title={"بازگشت"}/>

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

                    <div className={styles.c2_title}>{"قیمت نهایی"}</div>
                    <div className={styles.c2_space}/>
                    <div className={styles.c2_price}>{"598,000 تومان"}</div>

                </div>
                
            </div>
            </>
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