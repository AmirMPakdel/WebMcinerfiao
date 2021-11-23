import React, { Component } from "react";
import styles from "./UserPanelHeader.module.css";
import TabHeader from "./UserPanelHeaderTab";

export default class UserPanelHeader extends Component {
    
    render(){
        return(
            <div className={styles.header_con}>

                <div className={styles.row1}>

                    <div className={styles.title}>
                        {"علیرضا رمضانی"}
                    </div>

                    <BorderIconButton icon={"./svg/password.svg"} title="تغییر گذرواژه"/>

                    <BorderIconButton icon={"./svg/logout.svg"} title="خروج"/>

                </div>

                <div className={styles.row2}>
                    
                    <div>{"so.mgfiotygf@gmail.com"}</div>
                    <div>|</div>
                    <div>{"09118015081"}</div>

                </div>
                
                <img className={styles.dashed} src={"./svg/user_long_dashed.svg"}/>

                <TabHeader/>

            </div>
        )
    }
}

class BorderIconButton extends Component{
    render(){
        return(
            <div className={styles.bricbtn_con+" amp_btn"}>

                <img className={styles.bricbtn_icon} src={this.props.icon}/>

                <div className={styles.bricbtn_title} >{this.props.title}</div>

            </div>
        )
    }
}