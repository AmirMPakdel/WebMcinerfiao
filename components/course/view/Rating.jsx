import React, { Component } from "react";
import styles from "./Rating.module.css";

export default class Rating extends Component {
    
    render(){
        return(
            <div className={styles.rating}>
                
                <img className={styles.star} src={"./svg/rating_fullstar_black.svg"}/>
                <img className={styles.star} src={"./svg/rating_fullstar_black.svg"}/>
                <img className={styles.star} src={"./svg/rating_fullstar_black.svg"}/>
                <img className={styles.star} src={"./svg/rating_fullstar_black.svg"}/>
                <img className={styles.star} src={"./svg/rating_fullstar_black.svg"}/>
                
            </div>
        )
    }
}