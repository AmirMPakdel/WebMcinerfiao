import React, { Component } from "react";
import styles from "./UserPanelTabMyFavorits.module.css";

export default class UserPanelTabMyFavorits extends Component {
    
    render(){
        return(
            <div className={styles.mfav_con}>

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
            <div className={styles.favcard_con+" "+add_class}>
                
                <img className={styles.favcard_img} src={this.props.img}/>

                <div className={styles.favcard_title}>{this.props.title}</div>

                <img className={styles.favcard_btn+" amp_btn"} src={"./svg/fav_card_heart.svg"}/>

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