import React, { Component } from "react";
import styles from "./MainButton.module.css";

export default class MainButton extends Component {
    
    render(){


        let add_class = "";

        if(this.props.className){
            add_class += this.props.className+" ";
        }

        if(this.props.border_mode){

            add_class += styles.border_mode+" ";

        }else if(this.props.white_border){

            add_class += styles.white_border+" ";
        }

        if(!this.props.right_arrow && !this.props.left_arrow){
            add_class += styles.more_padding+" ";
        }

        return(
            <div className={styles.mbtn_con+" "+add_class+" amp_btn"} onClick={this.props.onClick}>
                
                {
                    this.props.right_arrow?
                    <img className={styles.right_arrow} src="./svg/btn_right_arrow.svg"/>:
                    null
                }

                {
                    this.props.white_border?
                    <div className={styles.title_white}>{this.props.title}</div>:
                    <div className={styles.title}>{this.props.title}</div>
                }

                {
                    this.props.left_arrow?
                    <img className={styles.left_arrow} src="./svg/btn_left_arrow.svg"/>:
                    null
                }
                
            </div>
        )
    }
}