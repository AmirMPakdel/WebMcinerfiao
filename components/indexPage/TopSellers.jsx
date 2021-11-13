import React, { Component } from "react";
import CourseCard from "../card/CourseCard";
import MainButton from "../global/MainButton";
import SectionTitle from "./SectionTitle";
import styles from "./TopSellers.module.css";

export default class TopSellers extends Component {
    
    render(){
        return(
            <>
            <img className={styles.backshape} src={"./svg/back_shape1.svg"}/>
            
            <div className={styles.tsell_con}>

                <SectionTitle title={"پرفروش ترین دوره ها"} black_mode/>

                <div className={styles.tsell_1lv_con}>

                    <CourseCard image={"./fake_img/5.jpg"}/>
                    <CourseCard image={"./fake_img/6.jpg"}/>
                    <CourseCard image={"./fake_img/7.jpg"}/>
                    <CourseCard image={"./fake_img/8.jpg"}/>

                </div>

                <div className={styles.tsell_1lv_con}>

                    <div className={styles.more_con}>
                        <MainButton title="مشاهده همه" left_arrow border_mode/>
                        <img className={styles.more_img} src={"./svg/main_more_img.svg"}/>
                    </div>
                    <CourseCard image={"./fake_img/18.jpg"}/>
                    <CourseCard image={"./fake_img/9.jpg"}/>
                    <CourseCard image={"./fake_img/10.jpg"}/>
                    
                </div>
                
            </div>
            </>
        )
    }
}