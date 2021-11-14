import React, { Component } from "react";
import MainButton from "../global/MainButton";
import styles from "./PriceCategoryPage.module.css";
import TextInput from "../global/TextInput";

export default class PriceCategoryPage extends Component {

    state={
        can_continue:false,

        inputs:{
            title: "",
            price: "",
        }
    }

    componentDidMount(){
        
        fakeInput(this);
    }

    onChangeInput = (k, v)=>{

        this.props.parent.state[k]=v;
        this.setState(this.state, this.continueCheck);
    }

    continueCheck=(mark_red)=>{

        let ps = this.props.parent.state;
        let can = true;

        if(!ps.title){
            can = false;
        }
        if(!ps.price){
            can = false;
        }

        this.setState({can_continue:can});
    }
    
    onNext=()=>{

        if(!this.state.can_continue){
            this.continueCheck(true);
            return;
        }
        
        this.props.parent.setState({
            step : 2
        });
    }

    render(){
        
        let ps = this.props.parent.state;
        return(
            <>
            <div className={styles.con}>

                <div className={styles.sec_con}>
                    
                    <div className={styles.sec_title}>{"عنوان و قیمت دوره"}</div>

                    <div className={styles.info_sec1+" cpnt"}>{text1}</div>

                    <input className={styles.txinput1} placeholder={"عنوان دوره"}
                    value={ps.title}
                    onChange={(e)=>this.onChangeInput("title", e.target.value)}/>

                    <div className={styles.info_sec2}>{text2}</div>

                    <input className={styles.txinput1+" cpnt"} placeholder={"قیمت دوره"}
                    value={ps.price}
                    onChange={(e)=>this.onChangeInput("price", e.target.value)}/>

                </div>

            </div>

            <div className={styles.wrapper2}>

                <MainButton className={styles.next_btn} 
                title={"تایید و ادامه"}
                onClick={this.onNext}
                disabled={!this.state.can_continue}/>

            </div>
            </>
        )
    }
}

const text1 = "در این قسمت عنوان دوره‌ای را که قصد دارید دوره با این نام ثبت شود و به فروش رود وارد کنید";
const text2 = "در این قسمت، قیمت مد نظر خود را برای فروش دوره وارد کنید";

function fakeInput(c){
    c.props.parent.setState ({

        title:"دروه ریاضی تکمیلی",

        price:"350000",

    }, c.continueCheck);
}