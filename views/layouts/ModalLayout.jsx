import React, { Component } from "react";
import styles from "./ModalLayout.module.css";
import chest from "../../utils/chest";
import { Modal } from "antd";

export default class ModalLayout extends Component {

    state = {
        visible:false,
        modals: {},
        modal_jsx:null,

        layer1:null,
        layer1_visible:false,

    }

    componentDidMount(){
        chest.ModalLayout.setModal = this.setModal;
        chest.ModalLayout.visibleToggle = this.visibleToggle;
        // chest.ModalLayout.tempModal = this.tempModal;
        // chest.ModalLayout.addModal = this.addModal;
        // chest.ModalLayout.showModal = this.showModal;
        // chest.ModalLayout.hideModal = this.hideModal;
        // chest.ModalLayout.deleteModal = this.deleteModal;
    }

    componentWillUnmount(){
        // chest.ModalLayout.tempModal = ()=>{};
        // chest.ModalLayout.addModal = ()=>{};
        // chest.ModalLayout.showModal = ()=>{};
        // chest.ModalLayout.hideModal =  ()=>{};
        // chest.ModalLayout.deleteModal = ()=>{};
    }

    setModal = (layer, jsx, cb)=>{
        this.state["layer"+layer] = jsx;
        this.setState(this.state, cb)
    }

    visibleToggle = (layer, visible, cb)=>{
        this.state["layer"+layer+"_visible"] = visible;
        this.setState(this.state, cb)
    }


    // tempModal = (jsx)=>{
    //     this.setState({modal_jsx:jsx, visible:true});
    // }

    // addModal = (jsx, name)=>{
    //     this.state.modals[name] = jsx;
    // }

    // showModal = (name)=>{
    //     let m = this.state.modals[name];
    //     this.setState({modal_jsx:m, visible:true});
    // }

    // hideModal = ()=>{
    //     this.setState({visible:false});
    // }

    // deleteModal = (name)=>{
    //     delete this.state.modals[name];
    //     this.setState(this.state);
    // }

    // onBackdrop=()=>{
        
    // }
    
    render(){

        if(this.state.visible){
            chest.disableBodyVerticalScroll();
        }else{
            chest.enableBodyVerticalScroll();
        }

        let s = this.state;

        return(
            <div className={styles.modalay_con}>
                {
                    this.props.children
                }
                {
                    <Modal visible={s.layer1_visible} 
                    centered={true}
                    footer={null} 
                    wrapClassName={styles.modal_wrapper}
                    //bodyStyle={{backgroundColor:"green", display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", width:"100vw"}}
                    closable={false}
                    className={styles.modal_con}>

                        {
                            s.layer1
                        }

                    </Modal>
                }
            </div>
        )
    }
}