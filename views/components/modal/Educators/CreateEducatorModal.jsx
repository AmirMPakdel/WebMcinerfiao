import React, { Component } from "react";
import styles from "./CreateEducatorModal.module.css";
import MainButton from "../../global/MainButton";
import TextInput from "../../global/TextInput";
import EducatorsCrudModal from "./EducatorsCrudModal";
import chest from "../../../../utils/chest";
import TextArea from "../../global/TextArea";
import FileUpload from "../../global/FileUpload";
import CreateEducatorController from "../../../../controllers/modals/educators/CreateEducatorController";
import { InputFilter } from "../../../../utils/validation";
import UploadEducatorImage from "../../upload/UploadEducatorImage";

/**
 * Props of CreateEducatorModal Component
 * @typedef Props
 * @property {string} className
 * @property {boolean} selectable
 * @property {boolean} editable
 * @property {"checkbox" | "radio"} selectionType
 * @property {()=>{}} onCancel
 * @property {()=>{}} onConfirm
 * 
 * @extends {Component<Props>}
 */
export default class CreateEducatorModal extends Component {

    constructor(props){
        super(props);
        this.state={
            btn_loading:false,
            image_file:null,
            img_src:null,

            upload_key:null,
            first_name:"",
            last_name:"",
            bio:"",

            first_name_error:false,
            last_name_error:false,
            bio_error:false,
        }

        this.controller = new CreateEducatorController(this);
    }

    onCancel=()=>{
        if(this.props.onCancel){
            this.props.onCancel();
        }else{
            chest.ModalLayout.visibleToggle(2, false, ()=>{
                chest.ModalLayout.visibleToggle(1, true);
            });
        }
    }

    onCreate=()=>{
        this.controller.createEducator();
    }

    onImage=(file, file_name, img_src)=>{
        this.setState({image_file:file, img_src});
    }

    onInput=(key, text)=>{
        this.state[key] = text;
        this.state[key+"_error"] = false;
        this.setState(this.state);
    }

    render(){
        return(
            <div className={styles.con+" bglc1 btc2 xl_card_shd"}>

                <img className={styles.close_btn + " bglc1 amp_btn md_card_shd"} 
                src={"/svg/modal_close.svg"}
                onClick={this.onCancel}/>

                <div className={styles.wrapper}>

                    <div className={styles.title+" tilt "}>{"ایجاد دبیر"}</div>

                    <div className={styles.form_body}>

                        <UploadEducatorImage
                        ref={r=>this.UploadEducatorImage=r}/>

                        <TextInput className={styles.form_input}
                        style={{marginTop:"2.5rem"}}
                        placeholder={"نام"}
                        onChange={t=>this.onInput("first_name", t)}
                        value={this.state.first_name}
                        error={this.state.first_name_error}
                        inputFilter={InputFilter.persianNameInputFilter}/>

                        <TextInput className={styles.form_input}
                        placeholder={"نام خانوادگی"}
                        onChange={t=>this.onInput("last_name", t)}
                        value={this.state.last_name}
                        error={this.state.last_name_error}
                        inputFilter={InputFilter.persianNameInputFilter}/>

                        <TextArea className={styles.form_ta}
                        title={"بایو"}
                        onChange={t=>this.onInput("bio", t)}
                        value={this.state.bio}
                        error={this.state.bio_error}/>

                    </div>

                    <div className={styles.sec1}>
                        
                        <MainButton className={styles.confirm_btn}
                        title={"ایجاد"}
                        loading={this.state.btn_loading}
                        onClick={this.onCreate}/>

                    </div>

                </div>

            </div>
        )
    }
}