import React, { Component } from "react";
import styles from "./VideoCard.module.css";

/**
 * 
 * @typedef Props
 * @property {String} className
 * @property {String} thumbnail
 * 
 * @extends {Component<Props>}
 */
export default class VideoCard extends Component {
    
    render(){
        
        let addClass = "";

        return(
            <div className={styles.con+" "+this.props.className+" "+addClass}
            style={{backgroundImage:`url(${this.props.thumbnail})`}}>

                <img className={styles.play_btn+" amp_btn"} src={"/svg/video_play_big.svg"}/>
                
            </div>
        )
    }
}