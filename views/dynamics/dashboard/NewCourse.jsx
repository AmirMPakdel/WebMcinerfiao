import React, { Component } from "react";
import EducatorDashboardLayout from "../../layouts/EducatorDashboardLayout";
import styles from "./NewCourse.module.css";
import NewCourseSteps from '../../components/course/NewCourseSteps';
import PriceCategoryPage from "../../components/course/PriceCategoryPage";
import PlayModeSelectPage from "../../components/course/PlayModeSelectPage";
import CreateCoursePage from "../../components/course/CreateCoursePage";
import WrapperT1 from "../../layouts/WrapperT1";
import Loading from "../../components/global/Loading";
import NewCourseController from "../../../controllers/dashboard/NewCourseController";

export default class NewCourse extends Component {
    
    constructor(props){
        super(props);

        this.conroller = new NewCourseController(this);

        this.state={

            step: "loading",

            categories:[],
    
            title: "",
            price: "",
            category: null,
            is_encrypted: 1,
        }
    }
    

    componentDidMount(){

        this.conroller.getInitialData();
    }

    render(){
        return(
            <EducatorDashboardLayout>
                <WrapperT1>
                
                    <NewCourseSteps step={this.state.step}/>
                    
                    {
                        this.state.step==="loading"?
                        <Loading style={{minHeight:"24rem"}}/>:
                        null
                    }
                    {
                        this.state.step===1?
                        <PriceCategoryPage
                        parent={this}/>
                        :null
                    }
                    {
                        this.state.step===2?
                        <PlayModeSelectPage
                        parent={this}/>
                        :null
                    }
                    {
                        this.state.step===3?
                        <CreateCoursePage
                        parent={this}/>
                        :null
                    }

                </WrapperT1>
            </EducatorDashboardLayout>
        )
    }
}