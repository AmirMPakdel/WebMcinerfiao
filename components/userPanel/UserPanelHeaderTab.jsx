import React, { Component } from "react";
import controller from "../../utils/controller";
import UserPanelTabMyCourses from "./UserPanelTabMyCourses";
import UserPanelTabMyFavorits from "./UserPanelTabMyFavorits";
import UserPanelTabMyOrders from "./UserPanelTabMyOrders";
import UserPanelTabMyProfile from "./UserPanelTabMyProfile";
import styles from "./UserPanelHeaderTab.module.css";

export default class UserPanelHeaderTab extends Component {
    
    state={selected:0}

    onSelect = (number)=>{

        let tab = <UserPanelTabMyCourses/>;

        switch(number){
            case 1: {
                tab=<UserPanelTabMyFavorits/>;
                break;
            };
            case 2: {
                tab=<UserPanelTabMyOrders/>;
                break;
            }
            case 3: {
                tab=<UserPanelTabMyProfile/>;
                break;
            }
        }

        controller.UserPanel.userChangeTab(tab);

        this.setState({selected:number});
    }

    render(){
        return(
            <div className={styles.TabHeader_con}>

                <Tab number={0} title={"دوره های من"} selected={this.state.selected}
                onClick={this.onSelect}/>
                <Tab number={1} title={"علاقمندی ها"} selected={this.state.selected}
                onClick={this.onSelect}/>
                <Tab number={2} title={"تاریخچه سفارشات"} selected={this.state.selected}
                onClick={this.onSelect}/>
                <Tab number={3} title={"صفحه شخصی"} selected={this.state.selected}
                onClick={this.onSelect}/>

            </div>
        )
    }
}

function Tab(props){
    return(
        <div className={styles.tab+" amp_btn"} onClick={()=>props.onClick(props.number)}>
            <div className={styles.title}>{props.title}</div>
            {
                props.number == props.selected?
                <div className={styles.tab_line_on}/>:
                <div className={styles.tab_line}/>
            }
        </div>
    )
}