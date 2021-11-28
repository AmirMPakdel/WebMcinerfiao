import React, { Component } from "react";
import styles from "./ModalLayout.module.css";
import chest from "../../utils/chest";

export default class ModalLayout extends Component {

    state = {
        show_modal:false,
        modal_jsx:null,
    }

    componentDidMount(){
        chest.ModalLayout.controlModal = this.controlModal;
    }

    componentWillUnmount(){
        chest.ModalLayout.controlModal = ()=>{};
    }

    controlModal = (visible=false, jsx, options={})=>{

        if(!jsx){
            visible = false;
            jsx = null;
        }

        this.setState({
            show_modal:visible,
            modal_jsx:jsx,
        });
    }
    
    render(){

        if(this.state.show_modal){
            chest.disableBodyVerticalScroll();
        }else{
            chest.enableBodyVerticalScroll();
        }

        return(
            <div className={styles.modalay_con}>
                
                {
                    this.props.children
                }
                {
                    this.state.show_modal?
                    <div className={styles.backdrop} onClick={this.onBackdrop}>

                        {this.state.modal_jsx}

                    </div>:null
                }
                
            </div>
        )
    }
}