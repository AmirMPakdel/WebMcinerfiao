import React, { Component } from "react";
import styles from "./EmptyList.module.css";

/**
 * @typedef Props
 * @property {React.CSSProperties} style
 * @property {string} className
 * @property {string} title
 * 
 * @extends Component<Props>
 */
export default class EmptyList extends Component {
    
    render(){
        return(
            <div className={styles.con+" "+this.props.className} style={this.props.style}>

                <img className={styles.img} src={"/statics/svg/info_gray.svg"}/>

                {
                    this.props.title?
                    <div className={styles.text}>{this.props.title}</div>:
                    <div className={styles.text}>{"آیتمی برای نمایش موجود نیست"}</div>
                }
                
            </div>
        )
    }
}