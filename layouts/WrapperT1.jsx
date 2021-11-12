import React, { Component } from "react";
import styles from "./WrapperT1.module.css";

export default class WrapperT1 extends Component {
    
    render(){
        return(
            <div className={styles.con+" bglc1"}>
                <div className={styles.w1}>
                {
                    this.props.children
                }
                </div>
            </div>
        )
    }
}