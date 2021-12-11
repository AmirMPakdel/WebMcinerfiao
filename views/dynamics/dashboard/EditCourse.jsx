import React, { Component } from "react";
import EditCourseTitle from "../../components/editCourse/EditCourseTitle";
import SecTitle from "../../components/panel/SecTitle";
import EducatorDashboardLayout from "../../layouts/EducatorDashboardLayout";
import styles from "./EditCourse.module.css";

export default class EditCourse extends Component {

    state = {
        
    }

    
    render(){
        return(
            <EducatorDashboardLayout>

                <EditCourseTitle parent={this}/>
                

            </EducatorDashboardLayout>
        )
    }
}