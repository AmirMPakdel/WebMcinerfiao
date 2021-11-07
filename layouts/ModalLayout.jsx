import React, { Component } from "react";
import ConfirmModal from "../components/modal/ConfirmModal";
import LoginModal from "../components/modal/LoginModal";
import RegisterModal from "../components/modal/RegisterModal";
import styles from "./ModalLayout.module.css";

export default class ModalLayout extends Component {

    state = {
        show_modal:false,
        modal_jsx:<LoginModal/>
    }
    
    render(){

        return(
            <div className={styles.modalay_con}>
                
                {
                    this.state.show_modal?
                        <div className={styles.backdrop} onClick={this.onBackdrop}>
                            {this.state.modal_jsx}
                        </div>:null
                }

                {
                    this.props.children
                }
                
            </div>
        )
    }
}