import React, { Component } from "react";
import styles from "./Index.module.css";
import HomeLayout from '../../layouts/IndexLayout';
import SearchBar from '../../components/indexPage/SearchBar';
import NewestCourses from '../../components/indexPage/NewestCourses';
import TopSellers from '../../components/indexPage/TopSellers';
import FreeCourses from '../../components/indexPage/FreeCourses';
import SignupSec from '../../components/indexPage/SignupSec';
import JoinAsTeacher from '../../components/indexPage/JoinAsTeacher';
import Aboutus from '../../components/indexPage/Aboutus';

export default class Index extends Component {

    componentDidMount(){
        document.title="سایت فروش آموزش آنلاین مینفو"
    }
    
    render(){
        return(
            <HomeLayout>

                <div className={styles.search_section_con}>

                <SearchBar/>

                </div>

                <div className={styles.newest_courses_sec}>

                <NewestCourses/>

                </div>

                <div className={styles.about_signup_sec}>

                <SignupSec/>

                </div>

                <div className={styles.top_seller_sec}>

                <TopSellers/>

                </div>

                <div className={styles.join_as_teacher_sec}>

                <JoinAsTeacher/>

                </div>

                <div className={styles.free_courses_sec}>

                <FreeCourses/>

                </div>

                <div className={styles.about_us_sec}>

                <Aboutus/>

                </div>

                <div className={styles.footer_sec}>

                </div>
                
            </HomeLayout>
        )
    }
}