import React, { Component } from "react";
import MyCoursesController from "../../../controllers/dashboard/MyCoursesController";
import MainButton from "../../components/global/MainButton";
import Svg from "../../components/global/Svg";
import EducatorDashboardLayout from "../../layouts/EducatorDashboardLayout";
import WrapperT1 from "../../layouts/WrapperT1";
import BackShape1 from "../../svgs/BackShape1";
import styles from "./MyCourses.module.css";

export default class MyCourses extends Component {

    constructor(props){
        super(props);
        this.controller = new MyCoursesController(this);
        this.state = {
            loading:true,
            myCourseList:[]
        }
    }
    
    componentDidMount(){
        document.title="دوره های من";
        this.controller.loadMyCourses();
    }

    render(){
        return(
            <EducatorDashboardLayout>

                <WrapperT1>

                    <div className={styles.mcrs_con}>

                        {/* <BackShape1 fill="#6600AA"/> */}

                        {
                            this.state.myCourseList.map((v,i)=>(
                                <CourseCard data={v} key={i}/>
                            ))
                        }

                    </div>
                    
                </WrapperT1>

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

                    <MainButton className={styles.cc_btn} border_mode title={"مقالات"}/>

                    <MainButton className={styles.cc_btn}title={"ویرایش دوره"}
                    onClick={()=>{window.location.href+="/edit"}}/>

                </div>

            </div>
        )
    }
}