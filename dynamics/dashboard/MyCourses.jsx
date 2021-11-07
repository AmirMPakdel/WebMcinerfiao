import React, { Component } from "react";
// import MainButton from "../../components/mainPage/MainButton";
import EducatorDashboardLayout from "../../layouts/EducatorDashboardLayout";
import styles from "./MyCourses.module.css";

export default class MyCourses extends Component {
    
    componentDidMount(){
        document.title="دوره های من"
    }

    render(){
        return(
            <EducatorDashboardLayout>

                <div className={styles.mcrs_con}>

                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>

                </div>

            </EducatorDashboardLayout>
        )
    }
}

class CourseCard extends Component{

    render(){
    
        return(
            <div className={styles.cc_con}>

                <div className={styles.cc_sec1}>

                    <div className={styles.cc_img}
                    style={{backgroundImage:`url(${"/fake_img/11.jpg"})`}}/>

                    <div className={styles.cc_title}>{"آموزش طراحی سایت از مبتی تا حرفه ای"}</div>

                </div>

                <div className={styles.cc_sec2}>

                    <div className={styles.cc_number}>
                        {"1,450"}
                        <div className={styles.cc_number_tag}>{"عدد"}</div>
                    </div>

                    <div className={styles.cc_num_title}>{"دوره فروش رفته"}</div>

                </div>

                <div className={styles.cc_sec2}>

                    <div className={styles.cc_number}>
                        {"1,400,000"}
                        <div className={styles.cc_number_tag}>{"تومان"}</div>
                    </div>

                    <div className={styles.cc_num_title}>{"قیمت دوره"}</div>

                </div>

                <div className={styles.cc_sec3}>

                    {/* <MainButton className={styles.cc_btn} border_mode title={"تالار گفتگو"}/>

                    <MainButton className={styles.cc_btn}title={"ویرایش دوره"}
                    onClick={()=>{window.location.href+="/edit"}}/> */}

                </div>

            </div>
        )
    }
}