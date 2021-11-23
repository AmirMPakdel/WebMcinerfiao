import React, { Component } from "react";
import MainButton from "../global/MainButton";
import styles from "./UserPanelTabMyCourses.module.css";

export default class UserPanelTabMyCourses extends Component {
    
    render(){
        return(
            <div className={styles.mcrs_con}>
                
                {
                    arr.map((v, i)=>(
                        <CourseCard key={i} index={i} img={"./fake_img/21.jpg"} title={"جامع ترین دوره آموزش فیگما"}/>
                    ))
                }

            </div>

        )
    }
}

class CourseCard extends Component{

    render(){

        let add_class = "";
        if(this.props.index%2){
            add_class = styles.even_cards;
        }
        return(
            <div className={styles.ccard_con+" "+add_class}>
                
                <img className={styles.ccard_img} src={this.props.img}/>

                <div className={styles.ccard_title}>{this.props.title}</div>

                <MainButton className={styles.ccard_btn} title={"نمایش"}/>

            </div>
        )
    }
}

const arr = [
    {},
    {},
    {},
    {},
    {},
]