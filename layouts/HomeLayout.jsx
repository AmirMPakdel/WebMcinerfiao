import React, { Component } from "react";
import Header from "../components/mainPage/Header";
import styles from "./HomeLayout.module.css";
import ModalLayout from "./ModalLayout";

export default class HomeLayout extends Component {
    
    render(){
        return(
            <ModalLayout>
                <div className={styles.con}>

                    <Header/>
                
                    {this.props.children}

                </div>
            </ModalLayout>
        )
    }
}