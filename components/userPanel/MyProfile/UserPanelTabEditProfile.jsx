import React, { Component } from "react";
import MainButton from "../../global/MainButton";
import styles from "./UserPanelTabEditProfile.module.css";

export default class UserPanelTabEditProfile extends Component {

    state={
        first_name : "امیرمحمد",
        last_name : "پاکدل",
        email : "so.mgfiotygf@gmail.com",
        state : "گیلان",
        city : "رشت",
    }

    onChange = (text, key)=>{
        let obj = {};
        obj[key]  = text;
        this.setState(obj)
    }
    
    render(){
        return(
            <>

            <div className={styles.header_sec}>

                <div className={styles.header_title}>{"بروز رسانی صفحه شخصی"}</div>

                <MainButton border_mode title={"بازگشت"}/>

            </div>

            <div className={styles.edprf_con}>

                <InfoCard index={0} title={"نام"} text={this.state.first_name}
                onChange={(t)=>this.onChange(t, "first_name")}/>

                <InfoCard index={1} title={"نام خانوادگی"} text={this.state.last_name}
                onChange={(t)=>this.onChange(t, "last_name")}/>

                <InfoCard index={2} title={"ایمیل"} text={this.state.email}
                onChange={(t)=>this.onChange(t, "email")}/>

                <InfoCard index={3} title={"استان"} text={this.state.state}
                onChange={(t)=>this.onChange(t, "state")}/>

                <InfoCard index={4} title={"شهر"} text={this.state.city}
                onChange={(t)=>this.onChange(t, "city")}/>

            </div>
            <div className={styles.sec1}>
                <MainButton border_mode title={"ثبت"} onClick={this.onEdit}/>
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
            <div className={styles.editcrd_con+" "+add_class}>
                
                <div className={styles.editcrd_title}>{this.props.title}</div>

                <input className={styles.editcrd_text} value={this.props.text}
                onChange={e=>this.props.onChange(e.target.value)}/>

            </div>
        )
    }
}