import React, { Component } from "react";
import styles from "./YesNoModal.module.css";

/**
* Props of YesNoModal Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* @property {string} rightBtnTitle
* @property {string} leftBtnTitle
* 
* @extends {Component<Props>}
*/
export default class YesNoModal extends Component {
    
    render(){

        let p = this.props;
        let right_title = "بله";
        let left_title = "خیر";
        let right_class = " bgsc ";
        let left_class = " bgec ";

        if(p.rightBtnTitle){
            right_title = p.rightBtnTitle
        }

        if(p.leftBtnTitle){
            left_title = p.leftBtnTitle
        }

        if(p.rightBtnClassName){
            right_class = p.rightBtnClassName;
        }

        if(p.leftBtnClassName){
            left_class = p.leftBtnClassName
        }

        return(
            <div className={styles.con+" bglc1 btc2 lg_card_shd"}>

                <div className={styles.title+" tilt"}>{this.props.title}</div>

                <div className={styles.sec1}>

                    <div className={styles.right_btn+" bdyt amp_btn "+right_class}>
                        {right_title}
                    </div>

                    <div className={styles.left_btn+" bdyt amp_btn "+left_class}>
                        {left_title}
                    </div>

                </div>
                
            </div>
        )
    }
}