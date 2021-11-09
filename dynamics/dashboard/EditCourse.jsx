import React, { Component } from "react";
import EditabeText from "../../components/form/EditabeText";
import EditableImage from "../../components/form/EditableImage";
import EditablePrice from "../../components/form/EditablePrice";
import EditableTextArea from "../../components/form/EditableTextArea";
import EditContents from "../../components/form/editContents";
import EditRequirement from "../../components/course/EditWhatWeLearn";
import EditWhatWeLearn from "../../components/course/EditWhatWeLearn";
import SecTitle from "../../components/panel/SecTitle";
import EducatorDashboardLayout from "../../layouts/EducatorDashboardLayout";
import styles from "./EditCourse.module.css";

export default class EditCourse extends Component {

    state = {
        title : "دوره آموزشی فیزیک کوانتمی",
        new_title : "دوره آموزشی فیزیک کوانتمی",
        price : 360000,
        new_price : 360000,
        brief_info : brief_info,
        new_brief_info : brief_info,
        icon : "/fake_img/12.jpg",
        background_image : "/fake_img/19.jpg",
        what_we_learn : WhatWeLearnData,
        requirements : RequirementData,
        complete_info : complete_info,
        new_complete_info : complete_info,
    }

    onInput = (key, value)=>{
        let obj = {};
        obj["new_"+key] = value;
        this.setState(obj)
    }

    onInputSubmit = (key)=>{
        let obj = {};
        obj[key] = this.state["new_"+key];
        this.setState(obj);
    }

    onWhatWeLeanChange = ()=>{

    }

    onRequirement = ()=>{

    }
    
    render(){
        return(
            <EducatorDashboardLayout>
                
                <SecTitle title={"عنوان دوره"}/>

                <EditabeText value={this.state.new_title} old_value={this.state.title} 
                onChange={(t)=>this.onInput("title", t)} onSubmit={()=>this.onInputSubmit("title")}/>

                <div className={styles.line}/>

                <SecTitle title={"قیمت دوره"}/>

                <EditablePrice value={this.state.new_price} old_value={this.state.price} 
                onChange={(t)=>this.onInput("price", t)} onSubmit={()=>this.onInputSubmit("price")}/>

                <div className={styles.line}/>

                <SecTitle title={"توضیح مختصر دوره"}/>

                <EditableTextArea value={this.state.new_brief_info} old_value={this.state.brief_info} 
                onChange={(t)=>this.onInput("brief_info", t)} onSubmit={()=>this.onInputSubmit("brief_info")}/>

                <div className={styles.line}/>

                <SecTitle title={"عکس اصلی دوره"}/>

                <EditableImage image_src={this.state.icon}/>

                <div className={styles.line}/>

                <SecTitle title={"عکس پس زمینه دوره"}/>

                <EditableImage image_className={styles.background_image} image_src={this.state.background_image}/>

                <div className={styles.line}/>

                <SecTitle title={"محتوای دوره"}/>

                <EditContents data={content}/>

                <div className={styles.line}/>

                <SecTitle title={"مواردی که در این دوره آموزش داده می شود"}/>

                <EditWhatWeLearn data={this.state.what_we_learn} onWhatWeLeanChange={this.onWhatWeLeanChange}/>

                <div className={styles.line}/>

                <SecTitle title={"پیش نیاز های دوره"}/>

                <EditRequirement data={this.state.requirements} onRequirement={this.onRequirement}/>

                <div className={styles.line}/>

                <SecTitle title={"توضیحات کامل دوره"}/>

                <EditableTextArea texteara_className={styles.complete_info_ta} value={this.state.new_complete_info} 
                old_value={this.state.complete_info} 
                onChange={(t)=>this.onInput("complete_info", t)} onSubmit={()=>this.onInputSubmit("complete_info")}/>

                <div style={{marginTop:"5rem"}}/>

            </EducatorDashboardLayout>
        )
    }
}

const brief_info = `دوره از صفر صفر شروع خواهد شد! باهم نصب و تنظیم می کنیم و دوره شروع می شود. از مقدمات فیزیک شروع خواهیم کرد به تمام ابزار ها از مقدماتی تا حرفه ای و حتی فراتر خدمت شرکت کنندگان تدریس خواهد شد `

const WhatWeLearnData = [
    {
        order:1,
        text: "در نیاشس شیسمقخ ه هفجصضخ خصثحخق  ئ ثد حصث ئث صنمننصث ثم صثد"
    },
    {
        order:2,
        text: "در نیاشس شیسمقخ ه هفجصضخ خصثحخق  ئ ثد حصث ئث صنمننصث ثم صثد"
    },
    {
        order:3,
        text: "در نیاشس شیسمقخ ه هفجصضخ خصثحخق  ئ ثد حصث ئث صنمننصث ثم صثد"
    },
    {
        order:4,
        text: "در نیاشس شیسمقخ ه هفجصضخ خصثحخق  ئ ثد حصث ئث صنمننصث ثم صثد"
    },
]

const RequirementData = [
    {
        order:1,
        text: "در نیاشس شیسمقخ ه هفجصضخ خصثحخق  ئ ثد حصث ئث صنمننصث ثم صثد"
    },
    {
        order:2,
        text: "در نیاشس شیسمقخ ه هفجصضخ خصثحخق  ئ ثد حصث ئث صنمننصث ثم صثد"
    },

]

const complete_info = `مستقیم بریم سر اصل مطلب، اگر امروزه اگهی های کار را یک نگاهی بندازید یا ویترین مغازه ها را نگاهی کنید! خواهید دید که فتوشاپ یکی از نرم افزار هایی است که همه شرکت ها و آتلیه ها و بخصوص کانون های تبلیغاتی به آن احساس نیاز میکنند! چرا ؟ برای مثال هر محصولی را تولید کنند حتما اولین مرحله بسته بندی ان خواهد بود که نیاز به فتوشاپ احساس میگردد. علاوه بر این ها تمام دانشجویان در هر رشته ای هم که باشند روزی به فتوشاپ احتیاج پیدا خواهند کرد و مهم تر از همه عکاس ها که فتوشاپ بخش جدا نشدنی ویرایش عکس آنان است. این ها مثال های بسیار کلی بود ! اگر شما احساس نیاز به فتوشاپ دارید، هیچ کلاص خصوصی با هزینه های بسیار هنگفت مناسب شما نخواهد بود. تضمین میکنیم در کنار شما همراهان ، یکی از بهترین ها هستیم …

دوره سوم آموزش فتوشاپ برای چه کسانی مناسب هست؟
دوره از صفر صفر شروع خواهد شد! باهم نصب و تنظیم می کنیم و دوره شروع می شود. از مقدمات فتوشاپ شروع خواهیم کرد به تمام ابزار ها از مقدماتی تا حرفه ای و حتی فراتر خدمت شرکت کنندگان تدریس خواهد شد. این دوره هیچ محدودیت مطلبی نخواهد داشت ! هیچ تکنیکی در نزد مدرس باقی نمی ماند همه به شرکت کنندگان منتقل میگردد`

const content = [
    {
        order:1,
        title:"مقدمه",
        sessions:[
            {
                id:22,
                order:1,
                title:"1مقدمه ای بر فیزیک",
                type:"video"
            },
            {
                id:23,
                order:2,
                title:"2مقدمه ای بر فیزیک",
                type:"pdf"
            },
            {
                id:24,
                order:3,
                title:"3مقدمه ای بر فیزیک",
                type:"video"
            },
        ]
    }
]