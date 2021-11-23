import React, { Component } from "react";
import CourseCard from "../card/CourseCard";
import styles from "./FreeCourses.module.css";
import SectionTitle from "./SectionTitle";
import MainButton from '../global/MainButton';

export default class FreeCourses extends Component {
    
    render(){
        return(
            <>
            <img className={styles.backshape} src={"./svg/back_shape1.svg"}/>
            <div className={styles.freec_con}>
                <SectionTitle title={"دوره های رایگان"} black_mode/>
                <div className={styles.freec_1lv_con}>

                    <CourseCard image={"./fake_img/11.jpg"}/>
                    <CourseCard image={"./fake_img/12.jpg"}/>
                    <CourseCard image={"./fake_img/13.jpg"}/>
                    <CourseCard image={"./fake_img/14.jpg"}/>

                </div>

                <div className={styles.freec_1lv_con}>

                    
                    <CourseCard image={"./fake_img/15.jpg"}/>
                    <CourseCard image={"./fake_img/16.jpg"}/>
                    <CourseCard image={"./fake_img/17.jpg"}/>
                    <div className={styles.more_con}>
                        <MainButton title="مشاهده همه" right_arrow border_mode/>
                        <img className={styles.more_img} src={"./svg/main_more_img.svg"}/>
                    </div>

                </div>
                
            </div>
            </>
        )
    }
}