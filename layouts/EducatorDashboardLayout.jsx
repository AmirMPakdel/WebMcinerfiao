import React, { Component } from "react";
// import NotificationsMenu from "../components/educatorDashboard/NotificationsMenu";
import SideMenu from "../components/panel/SideMenu";
import Controller, {ControllerComponent} from "../utils/Controller";
import styles from "./EducatorDashboardLayout.module.css";

export default class EducatorDashboardLayout extends Component {

    onNitifications = ()=>{
        Controller.NotificationsMenu_toggle();
    }

    componentDidMount(){
        
    }
    
    render(){
        return(
            <div className={styles.layout}>

                <ControllerComponent/>
                
                <SideMenu/>

                <div className={styles.header_bar}>

                    <div>
                        <img className={styles.notification_img+" amp_btn"} src={"/svg/edu_notification.svg"}
                        onClick={this.onNitifications}/>
                        <div className={styles.badge}>{"21"}</div>
                    </div>

                    
                    <img className={styles.logout_img+" amp_btn"} src={"/svg/edu_logout.svg"}/>
                      
                </div>
                
                <div className={styles.wrapper}>
                    {this.props.children}
                    {/* <NotificationsMenu/> */}
                </div>

            </div>
        )
    }
}