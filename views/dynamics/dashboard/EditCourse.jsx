import React, { Component } from "react";
import EditCourseController from "../../../controllers/dynamics/dashboard/EditCourseController";
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
            },

            new_values:{
                title:"",
            },

            status:{
                title:"idle",
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
                
                <EditCourseTitle parent={this}/>

                </>
            }

            </EducatorDashboardLayout>
        )
    }
}