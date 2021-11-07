import React, { Component } from "react";
import EducatorDashboardLayout from "../../layouts/EducatorDashboardLayout";
import styles from "./NewCourse.module.css";
import NewCourseSteps from '../../components/course/NewCourseSteps';
import PriceCategoryPage from "../../components/course/PriceCategoryPage";
import PlayModeSelectPage from "../../components/course/PlayModeSelectPage";
import ConclusionPage from "../../components/course/ConclusionPage";

export default class NewCourses extends Component {
    
    state={
        step:1,
    }

    componentDidMount(){

    }

    onStep=(step)=>{
        this.setState({step})
    }

    render(){
        return(
            <EducatorDashboardLayout>
                
                <NewCourseSteps step={this.state.step} onStep={this.onStep}/>

                {
                    this.state.step===1?
                    <PriceCategoryPage/>
                    :null
                }
                {
                    this.state.step===2?
                    <PlayModeSelectPage/>
                    :null
                }
                {
                    this.state.step===3?
                    <ConclusionPage/>
                    :null
                }

            </EducatorDashboardLayout>
        )
    }
}