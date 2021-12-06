import React, { Component } from "react";
import EditEducatorController from "../../../../controllers/modals/educators/EditEducatorController";
import chest from "../../../../utils/chest";
import { InputFilter } from "../../../../utils/validation";
import FileUpload from "../../global/FileUpload";
import MainButton from "../../global/MainButton";
import TextArea from "../../global/TextArea";
import TextInput from "../../global/TextInput";
import EducatorsCrudModal from "../Educators/EducatorsCrudModal";
import styles from "./EditEducatorModal.module.css";

/**
* Props of EditEducatorModal Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditEducatorModal extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditEducatorController(this);
        this.state = {
            educator: props.data,

            btn_loading:false,

            upload_key:null,
            first_name:props.data.first_name,
            last_name:props.data.last_name,
            bio:props.data.bio,

            first_name_error:false,
            last_name_error:false,
            bio_error:false,
        }
    }
    
    componentDidMount(){
    }

    onCancel=()=>{
        let modal = <EducatorsCrudModal editable={true}/>
        chest.ModalLayout.controlModal(true, modal);
    }

    onEdit=()=>{
        this.controller.editEducator();
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

                    <div className={styles.title+" tilt "}>{"ویرایش دبیر"}</div>

                    <div className={styles.form_body}>

                        <FileUpload onFile={this.onImage}>

                            <div className={styles.img_con+" btc1 amp_btn"}>
                                
                                {
                                    this.state.img_src?
                                    <img className={styles.img} src={this.state.img_src}/>:
                                    <div className={styles.add_img+" ftc2"}>+</div>
                                }

                            </div>

                        </FileUpload>

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
                        title={"ویرایش"}
                        loading={this.state.btn_loading}
                        onClick={this.onEdit}/>

                    </div>

                </div>

            </div>
        )
    }
}