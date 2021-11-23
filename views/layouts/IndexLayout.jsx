import React, { Component } from "react";
import IndexHeader from "./IndexHeader";
import styles from "./IndexLayout.module.css";
import ModalLayout from "./ModalLayout";

export default class IndexLayout extends Component {
    
    render(){
        return(
            <ModalLayout>
                <div className={styles.con}>

                    <IndexHeader/>
                
                    {this.props.children}

                </div>
            </ModalLayout>
        )
    }
}