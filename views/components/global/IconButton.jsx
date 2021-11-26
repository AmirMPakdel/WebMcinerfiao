import React, { Component } from "react";
import styles from "./IconButton.module.css";

/**
* Props of IconButton Component
* @typedef Props
* @property {string} className
* @property {string} title
* @property {boolean} disabled
* @property {boolean} borderMode
* 
* @extends {Component<Props>}
*/
export default class IconButton extends Component {
    
    render(){

        let p = this.props;
        let add_class = "";

        if(p.borderMode){

            add_class+= styles.border_mode+" flc1 ";

        }else{

            add_class += "bgtc1 fdc1 ";
        }

        return(
            <div className={styles.con+" bdyt "+add_class+" amp_btn "+this.props.className}>

                <img className={styles.icon} src={this.props.icon}/>

                <div className={styles.title} >{this.props.title}</div>

            </div>
        )
    }
}