import React, { Component } from "react";
import MainButton from "../global/MainButton";
import styles from "./PlayModeSelectPage.module.css";

export default class PlayModeSelectPage extends Component {
    
    state={
        selected:"secure"
    }

    onSecure = ()=>{
        this.setState({selected:"secure"})
    }

    onInsecure = ()=>{
        this.setState({selected:"insecure"})
    }

    render(){
        return(
        <>
        <div className={styles.con}>

            <div className={styles.secure_sec}  onClick={this.onSecure}>

                <img className={styles.icon} src="/svg/play_secure.svg"/>
                <div className={styles.title}>{"نحوه پخش ایمن"}</div>
                <div className={styles.info_con}>
                    {t}
                </div>
                {
                    this.state.selected==="secure"?
                    <img className={styles.select} src={"/svg/select_selected.svg"}/>:
                    <div className={styles.unselected}/>
                }
            </div>

            <div className={styles.not_secure_sec} onClick={this.onInsecure}>

                <img className={styles.icon} src="/svg/play_not_secure.svg"/>
                <div className={styles.title}>{"نحوه پخش عادی"}</div>
                <div className={styles.info_con}>
                    {t}
                </div>
                {
                    this.state.selected==="insecure"?
                    <img className={styles.select} src={"/svg/select_selected.svg"}/>:
                    <div className={styles.unselected}/>
                }
            </div>
            
        </div>
        <div className={styles.wrapper2}>
            <MainButton className={styles.next_btn} title={"تایید و ادامه"}/>
        </div>
        </>
        )
    }
}

const t = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده`