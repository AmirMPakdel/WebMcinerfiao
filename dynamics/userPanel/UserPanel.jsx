import React, { Component } from "react";
import UserPanelHeader from "../../components/userPanel/UserPanelHeader";
import UserPanelTabMyCourses from "../../components/userPanel/UserPanelTabMyCourses";
import IndexLayout from "../../layouts/IndexLayout";
import Controller from "../../utils/controller";
import styles from "./UserPanel.module.css";

export default class UserPanel extends Component {

    state={
        tab:<UserPanelTabMyCourses/>
    }

    componentDidMount(){
        
        Controller.UserPanel.userChangeTab = this.changeTab;
    }

    componentWillUnmount(){

        Controller.UserPanel.userChangeTab = ()=>{};
    }

    changeTab = (jsx)=>{
        this.setState({tab:jsx});
    }
    
    render(){
        return(
            <IndexLayout>

                <UserPanelHeader/>

                {
                    this.state.tab
                }

                <div style={{height:"20rem"}}/>

            </IndexLayout>
        )
    }
}