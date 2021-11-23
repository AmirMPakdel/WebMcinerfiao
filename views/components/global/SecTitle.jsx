import React, { Component } from "react";
import styles from "./SecTitle.module.css";

export default class SecTitle extends Component {
    
    render(){

        let add_class = "";

        if(this.props.className){
            add_class += this.props.className+" ";
        }

        return(
            <div className={styles.con+" "+add_class}>

                <div className={styles.title}>{this.props.title}</div>
                
            </div>
        )
    }
}