import React, { Component } from "react";
import styles from "./CourseCard.module.css";

export default class CourseCard extends Component {
    
    render(){

        let add_class = "";
        if(this.props.className){
            add_class += this.props.className+" ";
        }

        return(
            <div className={styles.ccard_con+" "+add_class}>

                <img className={styles.ccard_img} src={this.props.image}/>

                <div className={styles.title}>{'جامع ترین دوره دوره دوره دوره آموزش گرافیک'}</div>
                
                <img className={styles.dash} src={"./svg/dash_line.svg"}/>

                <div className={styles.price_con}>
                    {"تومان"}
                    <div className={styles.price_num}>{"340,000"}</div>
                </div>

                
            </div>
        )
    }
}