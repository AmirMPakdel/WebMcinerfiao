import React, { Component } from "react";
import styles from "./SectionTitle.module.css";

export default class SectionTitle extends Component {
    
    render(){

        let add_class = "";
        if(this.props.black_mode){
            add_class = styles.black_mode;
        }

        return(
            <div className={styles.title_con}>
                
                {
                    this.props.black_mode?
                    <img className={styles.left_dashes} src={"./svg/sec_title_dashed_black.svg"}/>:
                    <img className={styles.left_dashes} src={"./svg/sec_title_dashed.svg"}/>
                }

                <div className={styles.title_txt+" "+add_class}>
                    {this.props.title}
                </div>

                {
                    this.props.black_mode?
                    <img className={styles.right_dashes} src={"./svg/sec_title_dashed_black.svg"}/>:
                    <img className={styles.right_dashes} src={"./svg/sec_title_dashed.svg"}/>
                }
                
            </div>
        )
    }
}