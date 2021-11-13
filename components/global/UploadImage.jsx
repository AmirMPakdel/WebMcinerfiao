import React, { Component } from "react";
import styles from "./UploadImage.module.css";

export default class UploadImage extends Component {

    openUpload = ()=>{
        this.upload_input.click()
    }
    
    render(){
        let title = "";
        let title_st = {};

        if(!this.props.value){
            title_st.opacity = 0;
            title = this.props.title;
        }

        return(
            <div className={styles.tput_con}>
                
                <div className={styles.tput_title} style={title_st}>{this.props.title}</div>
                
                <div className={styles.upload_sec}>

                    <div className={styles.title}>{this.props.title}</div>

                    <div className={styles.btn_sec+" amp_btn"} onClick={this.openUpload}>
                        <img className={styles.btn_img} src={"/svg/edu_upload.svg"}/>
                    </div>

                    <input ref={r=>this.upload_input = r} type="file" accept=".jpg, .png" id="myImage" 
                    name="image" className={styles.upload_input}/>

                </div>

            </div>
        )
    }
}