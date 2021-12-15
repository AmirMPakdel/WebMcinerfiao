import React, { Component } from "react";
import EditCourseController from "../../../controllers/dynamics/dashboard/EditCourseController";
import EditCourseBackgrund from "../../components/editCourse/EditCourseBackground";
import EditCourseEducators from "../../components/editCourse/EditCourseEducators";
import EditCourseIntroVideo from "../../components/editCourse/EditCourseIntroVideo";
import EditCourseLogo from "../../components/editCourse/EditCourseLogo";
import EditCourseTitle from "../../components/editCourse/EditCourseTitle";
import Loading from "../../components/global/Loading";
import SecTitle from "../../components/panel/SecTitle";
import EducatorDashboardLayout from "../../layouts/EducatorDashboardLayout";
import styles from "./EditCourse.module.css";

export default class EditCourse extends Component {

    constructor(props){
        super(props);

        this.controller = new EditCourseController(this);

        this.state = {

            loading:true,

            old_values:{
                title:"",
                logo:"",
                cover:"",
                intro_video:"",
            },

            new_values:{
                title:"",
                logo:"",
                cover:"",
                intro_video:"",
            },

            status:{
                title:"idle",
                logo:"idle",
                cover:"idle",
                intro_video:"idle",
            }
        }
    }

    componentDidMount(){

        this.controller.loadCourse();
    }
    
    render(){
        return(
            <EducatorDashboardLayout>

            {
                this.state.loading?
                <Loading style={{minHeight:"80vh"}}/>:
                <>

                    <div style={{marginTop:"2rem"}}/>
                    
                    <EditCourseTitle parent={this}/>

                    <EditCourseLogo parent={this}/>

                    <EditCourseBackgrund parent={this}/>

                    <EditCourseIntroVideo parent={this}/>

                    <EditCourseEducators parent={this}/>

                    <div style={{marginTop:"8rem"}}/>

                </>
            }

            </EducatorDashboardLayout>
        )
    }
}