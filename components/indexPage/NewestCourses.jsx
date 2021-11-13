import React, { Component } from "react";
import styles from "./NewestCourses.module.css";
import {Carousel} from 'antd';
import SectionTitle from "./SectionTitle";
import CourseCard from "../card/CourseCard";

export default class NewestCourses extends Component {
    
    render(){
        return(
            <>
            
            <SectionTitle title={"جدیدترین دوره ها"}/>
            
            <Carousel arrows={false} ref={r=>this.slider=r}>
                <SlideSec/>
                <SlideSec/>
                <SlideSec/>
                <SlideSec/>
                <SlideSec/>
            </Carousel>

            <div className={styles.slider_nav_sec}>

                <img className={styles.slide_right_arrow+" amp_btn"} src={"./svg/slide_left_arrow.svg"}/>

                <div className={styles.dash}/>
                <div className={styles.dash}/>
                <div className={styles.dash+" "+styles.dash_yellow}/>
                <div className={styles.dash}/>

                <img className={styles.slide_left_arrow+" amp_btn"} src={"./svg/slide_right_arrow.svg"}/>

            </div>
            </>
        )
    }
}

class SlideSec extends Component{

    render(){
        return(
        <div className={styles.slide_sec_con}>

            <CourseCard image={"./fake_img/4.jpg"}/>
            <CourseCard image={"./fake_img/1.jpg"}/>
            <CourseCard image={"./fake_img/2.jpg"}/>
            <CourseCard image={"./fake_img/3.jpg"}/>

        </div>)
    }
}