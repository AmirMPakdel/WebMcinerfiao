import React, { Component } from "react";
import SecTitle from "../../../components/global/SecTitle";
import TextArea from "../../../components/global/TextArea";
import TextInput from "../../../components/global/TextInput";
import UploadImage from "../../../components/global/UploadImage";
import MainButton from "../../../components/global/MainButton";
import EducatorDashboardLayout from "../../layouts/EducatorDashboardLayout";
import styles from "./Profile.module.css";

export default class Profile extends Component {

    state = {
        first_name : "امیرمحمد",
        last_name : "پاکدل",
        phone_number : "09118015081",
        email : "",
        state : "",
        city : "",
        national_code : "",
        education : "",
        bio : "",
        shaba_number:"",
    }

    onTextChange = (key, value)=>{
        let obj = {};
        obj[key] = value;
        this.setState(obj);
    }
    
    render(){
        return(
            <EducatorDashboardLayout>

                <div className={styles.con}>

                    

                    <SecTitle className={styles.title} title={"اطلاعات حساب کاربری"}/>

                    <TextInput title={"نام"} value={this.state.first_name}
                    onChange={(t)=>this.onTextChange("first_name", t)}/>

                    <TextInput title={"نام خانوادگی"} value={this.state.last_name}
                    onChange={(t)=>this.onTextChange("last_name", t)}/>

                    <TextInput title={"شماره موبایل"} value={this.state.phone_number}
                    onChange={(t)=>this.onTextChange("phone_number", t)}/>

                    <TextInput title={"ایمیل"} value={this.state.email}
                    onChange={(t)=>this.onTextChange("email", t)}/>

                    <TextInput title={"استان"} value={this.state.state}
                    onChange={(t)=>this.onTextChange("state", t)}/>

                    <TextInput title={"شهر"} value={this.state.city}
                    onChange={(t)=>this.onTextChange("city", t)}/>

                    <TextInput title={"کد ملی"} value={this.state.national_code}
                    onChange={(t)=>this.onTextChange("national_code", t)}/>

                    <UploadImage title={"ارسال تصویر کارت ملی"} value={this.state.city}
                    onChange={(t)=>this.onTextChange("city", t)}/>

                    <TextInput title={"مدرک تحصیلی"} value={this.state.education}
                    onChange={(t)=>this.onTextChange("education", t)}/>

                    <UploadImage title={"عکس پروفایل"} value={this.state.city}
                    onChange={(t)=>this.onTextChange("city", t)}/>

                    <TextArea className={styles.bio_sec} title={"بایو"} value={this.state.bio}
                    onChange={(t)=>this.onTextChange("bio", t)}/>

                    <div className={styles.btn_sec}>
                        <MainButton border_mode title={"بروزسانی"}/>
                    </div>

                    <SecTitle className={styles.title} title={"اطلاعات حساب بانکی"}/>

                    <TextInput className={styles.shaba_input} title={"شماره شبا"} value={this.state.shaba_number}
                    onChange={(t)=>this.onTextChange("shaba_number", t)} direction="ltr" static_title/>

                    <div className={styles.btn_sec}>
                        <MainButton border_mode title={"بروزسانی"}/>
                    </div>

                </div>

            </EducatorDashboardLayout>
        )
    }
}