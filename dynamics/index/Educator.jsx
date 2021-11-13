import React, { Component } from "react";
import CourseCard from "../components/mainPage/CourseCard";
import SectionTitle from "../components/viewCourse/SectionTitle";
import HomeLayout from "../layouts/HomeLayout";
import styles from "./Educator.module.css";

export default class Educator extends Component {
    
    render(){
        return(
            <HomeLayout>
                <div className={styles.educator_con}>

                    <div className={styles.edc_sec1}>

                        <img className={styles.img} src={"./fake_img/22.jpg"}/>

                        <div className={styles.name}>{"اکبر عبدی کردمحله ای"}</div>

                        <div className={styles.bio}>{"مدرس مهارتهای ارتباطی و توسعه فردی"}</div>

                    </div>

                    <SectionTitle title={"دوره های مدرس"}/>
                    
                    <div style={{height:"2rem"}}/>

                    <CourseRow/>
                    <CourseRow/>
                    <CourseRow/>

                    <div style={{height:"20rem"}}/>
                    
                </div>
            </HomeLayout>
        )
    }
}

function CourseRow(props){
    return(
        <div className={styles.crs_row}>
            <img className={styles.yellowbar} src={"./svg/prf_course_yellowbar.svg"}/>
            <CourseCard image={"./fake_img/8.jpg"}/>
            <CourseCard image={"./fake_img/8.jpg"}/>
            <CourseCard image={"./fake_img/8.jpg"}/>
            <CourseCard image={"./fake_img/8.jpg"}/>
        </div>
    )
}