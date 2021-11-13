import React, { Component } from "react";
import styles from "./IndexHeader.module.css";
import MainButton from "../components/global/MainButton";

export default class IndexHeader extends Component {
    
    render(){
        return(
            <div className={styles.header_con}>

                <MainButton title={"ثبت نام"}/>
                
                <div className={styles.space1}/>

                <MainButton title={"ورود"} white_border/>
                
            </div>
        )
    }
}