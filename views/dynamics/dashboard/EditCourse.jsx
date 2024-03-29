import React, { Component } from "react";
import EditCourseController from "../../../controllers/dynamics/dashboard/EditCourseController";
import EditCourseBackgrund from "../../components/editCourse/EditCourseBackground";
import EditCourseEducators from "../../components/editCourse/EditCourseEducators";
import EditCourseIntroVideo from "../../components/editCourse/EditCourseIntroVideo";
import EditCourseLogo from "../../components/editCourse/EditCourseLogo";
import EditCourseTitle from "../../components/editCourse/EditCourseTitle";
import Loading from "../../components/global/Loading";
import EducatorDashboardLayout from "../../layouts/EducatorDashboardLayout";
import styles from "./EditCourse.module.css";
import EditCoruseDuration from "../../components/editCourse/EditCourseDuration";
import EditCourseHoldingStatus from "../../components/editCourse/EditCourseHoldingStatus";
import EditCourseLongDesc from "../../components/editCourse/EditCourseLongDesc";
import EditCourseShortDesc from "../../components/editCourse/EditCourseShortDesc";
import EditCoursePrice from "../../components/editCourse/EditCoursePrice";
import EditCourseReleaseDate from "../../components/editCourse/EditCourseReleaseDate";
import EditCourseSuggestedCourses from "../../components/editCourse/EditCourseSuggestedCourses";
import EditCourseSuggestedPosts from "../../components/editCourse/EditCourseSuggestedPosts";
import EditCourseSubjects from "../../components/editCourse/EditCourseSubjects";
import EditCourseRequirements from "../../components/editCourse/EditCourseRequirements";
import EditCourseGroups from "../../components/editCourse/EditCourseGroups";
import EditCourseTags from "../../components/editCourse/EditCourseTags";
import EditCourseContents from "../../components/editCourse/EditCourseContents";
import PublishRequest from "../../components/editCourse/PublishRequest";

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
                educators:[],
                duration:"",
                holding_status:"",
                short_desc:"",
                long_desc:"",
                price:"",
                subjects:[],
                requirements:[],

                headings:[],
                contents:[],
                content_hierarchy:"",
            },

            new_values:{

                validation_status:"",
                validation_status_message:[],

                title:"",
                logo:"",
                cover:"",
                intro_video:"",
                educators:[],
                duration:"",
                holding_status:"",
                short_desc:"",
                long_desc:"",
                price:"",
                subjects:[],
                requirements:[],
                
                headings:[],
                contents:[],
                content_hierarchy:"",
            },

            status:{
                title:"idle",
                logo:"idle",
                cover:"idle",
                intro_video:"idle",
                educators:"idle",
                duration:"idle",
                holding_status:"idle",
                short_desc:"idle",
                long_desc:"idle",
                price:"idle",
                subjects:"idle",
                requirements:"idle",
                
                headings:"idle",
                contents:"idle",
                content_hierarchy:"idle",
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

                    <div style={{marginTop:"1rem"}}/>

                    <PublishRequest parent={this}/>

                    <EditCourseContents parent={this}/>
                    
                    <EditCourseTitle parent={this}/>

                    <EditCourseLogo parent={this}/>

                    <EditCourseBackgrund parent={this}/>

                    <EditCourseIntroVideo parent={this}/>

                    <EditCourseEducators parent={this}/>

                    <EditCoruseDuration parent={this}/>

                    <EditCourseHoldingStatus parent={this}/>

                    <EditCourseShortDesc parent={this}/>

                    <EditCourseLongDesc parent={this}/>

                    <EditCoursePrice parent={this}/>

                    <EditCourseSubjects parent={this}/>

                    <EditCourseRequirements parent={this}/>

                    {/* <EditCourseGroups parent={this}/> */}

                    {/* <EditCourseTags parent={this}/> */}

                    {/* <EditCourseReleaseDate parent={this}/> */}

                    {/* <EditCourseSuggestedCourses parent={this}/> */}

                    {/* <EditCourseSuggestedPosts parent={this}/> */}

                    <div style={{marginTop:"8rem"}}/>

                </>
            }

            </EducatorDashboardLayout>
        )
    }
}