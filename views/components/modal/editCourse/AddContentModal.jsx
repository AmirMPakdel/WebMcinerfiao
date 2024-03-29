import { Checkbox, ConfigProvider, Progress, Tooltip } from "antd";
import React, { Component } from "react";
import AddContentController from "../../../../controllers/modals/editCourse/AddContentController";
import chest from "../../../../utils/chest";
import { InputFilter } from "../../../../utils/validation";
import EditCourseContents from "../../editCourse/EditCourseContents";
import TextInput from "../../global/TextInput";
import styles from "./AddContentModal.module.css";
import {InfoCircleFilled, CloseCircleFilled} from "@ant-design/icons"
import MainButton from "../../global/MainButton";

/**
* Props of AddContentModal Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* @property {EditCourseContents} parent
* @property {{id:number, title:string}} heading
* @property {"video"|"audio"|"text"} type
* 
* @extends {Component<Props>}
*/
export default class AddContentModal extends Component {
    
    constructor(props){
        super(props);
        this.controller = new AddContentController(this);
        this.state = {
            
            title:"",
            is_free: 0,

            can_continue:false,

            file: null,
            file_name: "",
            upload_percent:0,
            status:"select",
            upload_loading:false,
        }
    }
    
    componentDidMount(){
    }

    onCancel=()=>{
        this.controller.onCancel();
    }

    onInput=(t)=>{
        this.controller.onInput(t);
    }

    onAccess=(is_free)=>{
        
        if(this.state.status==="uploading"){return};
        this.setState({is_free});
    }

    onSelectFile=()=>{
        this.input.click();
    }

    onInputClick=()=>{
        this.input.files = null;
        this.input.value = null;
    }

    onInputChange=(e)=>{

        let file = e.target.files[0];
        
        if(file.size < (450*1024*1024)){

            this.setState({
                file,
                file_name:file.name,
                status:"ready",
            })

        }else{

            chest.openNotification("فایل انتخابی حجم بالای 450 مگابایت دارد", "error");
        }
    }

    onRemoveFile=()=>{
        
        this.setState({
            file: null,
            file_name: "",
            status: "select",
        })
    }

    onCreate=()=>{

        if(!this.state.can_continue){
            chest.openNotification("عنوان محتوا نامعتبر است.","error")
            return;
        };

        this.controller.onCreate();
    }
    
    render(){

        let type_title = type2Title(this.props.type);

        return(
            <div className={styles.con+" bglc1 "}>

                <img className={styles.close_btn + " bglc1 amp_btn md_card_shd"} 
                src={"/svg/modal_close.svg"}
                onClick={this.onCancel}/>

                <div className={styles.wrapper}>

                    <div className={styles.title+" tilt"}>{"عنوان محتوای "+ type_title}</div>

                    <TextInput className={styles.title_input}
                    ref={r=>this.TextInput=r}
                    onChange={this.onInput}
                    value={this.state.title}
                    disabled={this.state.status==="uploading"}
                    placeholder={"عنوان محتوا"}/>

                    <div className={styles.title+" tilt"}>

                        {"نوع دسترسی کاربر"}
                        <ConfigProvider direction="rtl">
                        <Tooltip className={styles.info_tt}
                        placement="left" title={access_info_text}>
                            <InfoCircleFilled/>
                        </Tooltip>
                        </ConfigProvider>
                    </div>

                    <div className={styles.select_row+" bdyt"} onClick={()=>this.onAccess(1)}>
                        <Checkbox className={styles.select} checked={this.state.is_free===1}/>
                        {"محتوای رایگان و قابل دانلود برای عموم"}
                    </div>
                    <div className={styles.select_row+" bdyt"} onClick={()=>this.onAccess(0)}>
                        <Checkbox className={styles.select} checked={this.state.is_free===0}/>
                        {"محتوای قابل دانلود برای خریداران این دوره"}
                    </div>

                    <div className={styles.info1+" cpnt"}>
                        {"لطفا نوع دسترسی کاربر را با دقت انتخاب کنید زیرا بعد از ثبت قابل تغییر نخواهد بود."}
                    </div>

                    <div className={styles.title+" tilt"}>{"آپلود محتوا"}</div>

                    {
                        this.state.status === "select"?
                        <MainButton className={styles.upload_btn}
                        onClick={this.onSelectFile}
                        title="انتخاب فایل"/>:null
                    }

                    <input style={{display:"none"}} 
                    onClick={this.onInputClick}
                    ref={r=>this.input=r}
                    onChange={this.onInputChange}
                    type={"file"} accept={type2FileAccept(this.props.type)}/>

                    {
                        this.state.status === "uploading"?
                        <Progress className={styles.upload_progress} 
                        strokeColor="#FBAD16"
                        trailColor="#EAEAEA"
                        percent={this.state.upload_percent} 
                        size="default" status="active" />:
                        null
                    }

                    {
                        this.state.status === "ready"?
                        <div className={styles.file_name+" btc2 "}>
                            {this.state.file_name}
                            <CloseCircleFilled className={styles.remove_file+" amp_btn"}
                            onClick={this.onRemoveFile}/>
                        </div>:null
                    }
                    
                    {
                        this.state.status === "ready" || this.state.status === "uploading"?
                        <div className={styles.sec1}>

                        <MainButton className={styles.creat_btn}
                        title="بارگذاری و ثبت"
                        disabled={!this.state.can_continue}
                        loading={this.upload_loading}
                        onClick={this.onCreate}/>

                        </div>:null
                    }
                    
                </div>

            </div>
        )
    }
}

const access_info_text = "دسترسی رایگان چند محتوای آغازین دوره برای آشنایی بیشتر کاربر قبل از خرید، انتخابی هوشمندانه است"

function type2Title(type){

    switch(type){
        case "video": return "ویدیویی";
        case "audio": return "صوتی";
        case "text": return "متنی";
    }
}

function type2FileAccept(type){

    switch(type){
        case "video": return ".mp4";
        case "audio": return ".mp3";
        case "text": return ".pdf";
    }
}