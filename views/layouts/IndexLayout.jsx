import React, { Component } from "react";
import AccessLayout from "./AccessLayout";
import IndexHeader from "./IndexHeader";
import styles from "./IndexLayout.module.css";
import ModalLayout from "./ModalLayout";

/**
 * @typedef Props 
 * @property {AccessLevel} accessLevel
 * 
 * @extends {Component<Props>}
 */
export default class IndexLayout extends Component {
    
    render(){
        return(
            <AccessLayout accessLevel={this.props.accessLevel}>
                <ModalLayout>
                    <div className={styles.con+" bglc2i"}>

                        <IndexHeader/>
                    
                        {this.props.children}

                    </div>
                </ModalLayout>
            </AccessLayout>
        )
    }
}