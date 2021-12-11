import React, { Component } from "react";
import styles from "./SecTitle.module.css";

/**
* Props of SecTitle Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* @property {string} title
* 
* @extends {Component<Props>}
*/
export default class SecTitle extends Component {
    
    render(){

        let add_class = "";

        if(this.props.className){
            add_class += this.props.className+" ";
        }

        return(
            <div className={styles.con+" "+add_class} style={this.props.style}>

                <div className={styles.title}>{this.props.title}</div>
                
            </div>
        )
    }
}