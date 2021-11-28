import React, { Component } from "react";
// import NotificationsMenu from "../components/educatorDashboard/NotificationsMenu";
import SideMenu from "../components/panel/SideMenu";
import chest from "../../utils/chest";
import styles from "./EducatorDashboardLayout.module.css";
import AccessLayout from "./AccessLayout";
import ModalLayout from "./ModalLayout";

/**
 * @typedef Props 
 * @property {AccessLevel} accessLevel
 * 
 * @extends {Component<Props>}
 */
export default class EducatorDashboardLayout extends Component {

    onNitifications = ()=>{
        chest.NotificationsMenu_toggle();
    }

    componentDidMount(){
        
    }
    
    render(){
        return(

            <AccessLayout accessLevel={this.props.accessLevel}>
                <ModalLayout>
                    <div className={styles.layout+" bglc1i"}>
                        
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
                </ModalLayout>
            </AccessLayout>
        )
    }
}