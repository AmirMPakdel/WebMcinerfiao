import React, { Component } from "react";
import styles from "./MainButton.module.css";

/**
 * Props of MainButton Component
 * @typedef Props
 * @property {string} className
 * @property {string} title
 * @property {boolean} disabled
 * @property {boolean} borderMode
 * @property {boolean} whiteBorder
 * @property {boolean} rightArrow
 * @property {boolean} leftArrow
 * @property {function} onClick
 * 
 * @extends {Component<Props>}
 */
export default class MainButton extends Component {
    
    render(){

        let add_class = "";

        if(this.props.className){
            add_class += this.props.className+" ";
        }

        if(this.props.borderMode){

            add_class += styles.border_mode+" btc1 ";

        }else if(this.props.whiteBorder){

            add_class += styles.white_border+" blc1 ";
        
        }else{

            add_class += "bgtc1 ";
        }

        if(!this.props.rightArrow && !this.props.leftArrow){
            add_class += styles.more_padding+" ";
        }

        if(this.props.disabled){
            add_class += " bgdc2 "
        }

        return(
            <div className={styles.mbtn_con+" bdyt "+add_class+" amp_btn"} onClick={this.props.onClick}>
                
                {
                    this.props.rightArrow?
                    <img className={styles.rightArrow} src="/svg/btn_rightArrow.svg"/>:
                    null
                }
                {
                    this.props.whiteBorder?
                    <div className={styles.title+" flc1"}>{this.props.title}</div>:
                    <div className={styles.title+" fdc1"}>{this.props.title}</div>
                }
                {
                    this.props.leftArrow?
                    <img className={styles.leftArrow} src="/svg/btn_leftArrow.svg"/>:
                    null
                }
                
            </div>
        )
    }
}