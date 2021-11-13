import React, { Component } from "react";
import styles from "./Breadcrumb.module.css";

export default class Breadcrumb extends Component {
    
    render(){
        return(
            <div className={styles.con}>

                <div>{"خانه"}</div>
                <div>/</div>
                <div>{"محصولات"}</div>
                <div>/</div>
                <div>{"بازی سازی"}</div>
                <div>/</div>
                <div>{"آنریل انجین"}</div>
                
            </div>
        )
    }
}