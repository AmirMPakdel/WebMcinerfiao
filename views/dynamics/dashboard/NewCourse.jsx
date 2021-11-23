import React, { Component } from "react";
import EducatorDashboardLayout from "../../layouts/EducatorDashboardLayout";
import styles from "./NewCourse.module.css";
import NewCourseSteps from '../../components/course/NewCourseSteps';
import PriceCategoryPage from "../../components/course/PriceCategoryPage";
import PlayModeSelectPage from "../../components/course/PlayModeSelectPage";
import ConclusionPage from "../../components/course/ConclusionPage";
import WrapperT1 from "../../layouts/WrapperT1";

export default class NewCourses extends Component {
    
    state={

        step:1,

        title: "",
        price: "",
    }

    componentDidMount(){

    }

    onStep=(step)=>{
        this.setState({step})
    }

    render(){
        return(
            <EducatorDashboardLayout>
                <WrapperT1>
                
                    <NewCourseSteps step={this.state.step} onStep={this.onStep}/>

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
                        <ConclusionPage
                        parent={this}/>
                        :null
                    }

                </WrapperT1>
            </EducatorDashboardLayout>
        )
    }
}