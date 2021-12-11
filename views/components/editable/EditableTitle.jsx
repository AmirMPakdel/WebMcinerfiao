import React, { Component } from "react";
import styles from "./EditableTitle.module.css";

/**
* Props of EditableTitle Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* @property {string} title
* 
* @extends {Component<Props>}
*/
export default class EditableTitle extends Component {
    
    render(){

        let add_class = "";

        if(this.props.className){
            add_class += this.props.className+" ";
        }

        return(
            <div className={styles.con+" "+add_class} style={this.props.style}>

                <div className={styles.title_con}>

                    <div className={styles.title+" bgw tilt md_card_shd"}>
                        {this.props.title}
                    </div>

                </div>                
                
                <div className={styles.wrapper}>

                    {
                        this.props.children
                    }

                </div>
                
            </div>
        )
    }
}