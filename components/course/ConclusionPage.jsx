import React, { Component } from "react";
import MainButton from "../global/MainButton";
import styles from "./ConclusionPage.module.css";
import NewCourseSelect from "../course/NewCourseSelect";

export default class ConclusionPage extends Component {

    state={
        accepted:false,
    }

    onCheckBox=()=>{
        this.setState({accepted:!this.state.accepted})
    }

    onCreate=()=>{
        window.location.href = "/edu/myCourses/edit"
    }
    
    render(){
        return(
        <>
        <div className={styles.con}>
            <div className={styles.info}>
                <ul>
                {
                    t.map((v,i)=>(
                        <li key={i} className={styles.ul}>
                            {v}
                        </li>
                    ))
                }
                </ul>
                <NewCourseSelect className={styles.checkbox} onClick={this.onCheckBox} seclected={this.state.accepted} 
                title={"متن بالا را با دقت مطالعه نمودم و شرایط ذکر شده را قبول میکنم."}/>
            </div>
        </div>
        <div className={styles.wrapper2}>
            <MainButton className={styles.next_btn} title={"ایجاد دوره"} onClick={this.onCreate}/>
        </div>
        </>
        )
    }
}

const t = [
    `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است`,
    `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است`,
    `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از `,
    `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز`,
    `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با  طراحان گرافیک است`,
    `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است`,
    `لورم ایپسوم متن ساختگی با تولید سادگی  از چاپ و با استفاده از طراحان گرافیک است`,
    `لورم ایپسوم متن با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است`,
    `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد`,

]