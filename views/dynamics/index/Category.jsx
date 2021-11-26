import { ConfigProvider, Tree } from "antd";
import React, { Component } from "react";
import Breadcrumb from "../../components/global/Breadcrumb";
import FilterTree from "../../components/global/FilterTree";
import SortBar from "../../components/global/SortBar";
import CourseCard from "../../components/card/CourseCard";
import HomeLayout from "../../layouts/IndexLayout";
import styles from "./Category.module.css";

export default class Category extends Component {
    
    render(){
        return(
            <HomeLayout>

                <div className={styles.list_con}>
                    
                    <div className={styles.left_sec}>

                        <Breadcrumb/>

                        <SortBar/>

                        <div className={styles.crscrd_con}>

                            <CourseCard className={styles.crs_crd} image={"/fake_img/11.jpg"}/>

                            <CourseCard className={styles.crs_crd} image={"/fake_img/12.jpg"}/>

                            <CourseCard className={styles.crs_crd} image={"/fake_img/13.jpg"}/>

                            <CourseCard className={styles.crs_crd} image={"/fake_img/14.jpg"}/>

                            <CourseCard className={styles.crs_crd} image={"/fake_img/15.jpg"}/>

                        </div>

                    </div>

                    <div className={styles.right_sec}>

                        <div className={styles.tree_con}>

                            <FilterTree/>

                        </div>

                        <div className={styles.search_con}>

                            {/* <div style={styles.search_title}>{"جستجو در نتایج"}</div> */}
                            
                            {/* <div  style={styles.search_input_con}>
                                <input style={styles.search_input}/>
                                <img style={styles.search_icon}/>
                            </div> */}
                            

                        </div>

                        
                    </div>

                </div>
                
            </HomeLayout>
        )
    }
}