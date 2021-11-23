import React, { Component } from "react";
import styles from "./SearchBar.module.css";

export default class SearchBar extends Component {
    
    render(){

        return(
            <div className={styles.searchbar_con}>

                <img src={"./svg/search_img.svg"} className={styles.searchbar_img+" amp_btn"}/>
                
                <input className={styles.searchbar_input} placeholder="دوست داری چی یاد بگیری؟"/>

            </div>
        )
    }
}