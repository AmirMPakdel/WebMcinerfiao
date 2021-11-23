import React, { Component } from "react";
import controller from "../../utils/controller";
import MainButton from "../global/MainButton";
import UserPanelTabEditProfile from "./MyProfile/UserPanelTabEditProfile";
import styles from "./UserPanelTabMyProfile.module.css";

export default class UserPanelTabMyProfile extends Component {
    
    onEdit = ()=>{
        controller.UserPanel.userChangeTab(<UserPanelTabEditProfile/>)
    }

    render(){

        return(
            <>
            <div className={styles.mprf_con}>

                <InfoCard index={0} title={"نام"} text={"امیرمحمد"}/>
                <InfoCard index={1} title={"نام خانوادگی"} text={"پاکدل"}/>
                <InfoCard index={2} title={"شماره موبایل"} text={"09118015081"}/>
                <InfoCard index={3} title={"ایمیل"} text={"so.mgfiotygf@gmail.com"}/>
                <InfoCard index={4} title={"استان"} text={"گیلان"}/>
                <InfoCard index={5} title={"شهر"} text={"رشت"}/>

            </div>
            <div className={styles.sec1}>
                <MainButton border_mode title={"بروزرسانی"} onClick={this.onEdit}/>
            </div>
            </>
        )
    }
}

class InfoCard extends Component{

    render(){

        let add_class = "";
        if(this.props.index%2){
            add_class += styles.even_cards+" ";
        }
        return(
            <div className={styles.infocrd_con+" "+add_class}>
                
                <div className={styles.infocrd_title}>{this.props.title}</div>
                <div className={styles.infocrd_text}>{this.props.text}</div>

            </div>
        )
    }
}