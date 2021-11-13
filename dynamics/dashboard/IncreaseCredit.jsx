import React, { Component } from "react";
import Select from "../../components/global/Select";
import MainButton from "../../components/global/MainButton";
import EducatorDashboardLayout from "../../layouts/EducatorDashboardLayout";
import price from "../../utils/price";
import styles from "./IncreaseCredit.module.css";
import WrapperT1 from "../../layouts/WrapperT1";
const persianNToText = require('number-to-persian-text');

export default class IncreaseCredit extends Component {

    state={
        price: "",
        from_chest:true,
        from_bank:false,
        tooman_persian:"",
    }

    onPriceInput=(e)=>{

        let num = Number(e.target.value);
        if(isNaN(num)){
            num=0
        }else{
            num = Number.parseInt(num/10)
        }
        let text = persianNToText.getText(num)+" تومان";
        if(num < 10){
            text = "";
        }
        this.setState({price:e.target.value, tooman_persian:text});
    }

    onSelectType=(selected)=>{
        if(selected=="from_chest"){
            this.setState({from_chest:true, from_bank:false})
        }else if(selected=="from_bank"){
            this.setState({from_chest:false, from_bank:true})
        }
    }
    
    render(){
        return(
            <EducatorDashboardLayout>
                <WrapperT1>
                <div className={styles.con}>

                    <div className={styles.sec1}>

                        <div className={styles.sec_price}>

                            <div className={styles.sec_price_title}>{"افزایش اعتبار"}</div>

                            <div className={styles.price_text1}>{"هزینه مورد خودتان را برای افزایش اعتبار وارد کنید"}</div>

                            <input className={styles.price_input} value={this.state.price} 
                            placeholder={"مبلغ را وارد نمایید"} onChange={this.onPriceInput}/>

                            <div className={styles.price_text2}>{this.state.tooman_persian}</div>

                        </div>

                        <div className={styles.sec_select}>

                            <div className={styles.useFrom_con}>

                                <div className={styles.sec_price_title}>{"شیوه پرداخت"}</div>

                                <div className={styles.useFrom_wrapper}>

                                    <Select title={"صندوق درآمد"} seclected={this.state.from_chest}
                                    onClick={()=>this.onSelectType("from_chest")}/>

                                    <Select title={"درگاه بانکی"} seclected={this.state.from_bank}
                                    onClick={()=>this.onSelectType("from_bank")}/>

                                </div>

                            </div>

                            {
                                this.state.from_bank?
                                <div className={styles.portals_con}>

                                    <div className={styles.sec_price_title}>{"درگاه بانکی"}</div>

                                    <Select className={styles.portal_select} title={"درگاه پرداخت زرین پال"} 
                                    seclected={this.state.from_bank} onClick={()=>{}}/>

                                </div>:null
                            }

                            {
                                this.state.from_chest?
                                <div className={styles.income_sec}>

                                    <div className={styles.sec_price_title}>{"صندوق درآمد"}</div>

                                    <div className={styles.income_amount}>
                                        {price(36500000)}
                                        <div className={styles.price_tag}>{"تومان"}</div>
                                    </div>

                                    <div className={styles.income_text1}>{"این مبلغ درآمد حاصل برداشت نشده است"}</div>

                                </div>:null
                            }

                        </div>

                    </div>
                        
                    <MainButton className={styles.buy_btn} title={"خرید"}/>

                </div>
                </WrapperT1>
            </EducatorDashboardLayout>
        )
    }
}