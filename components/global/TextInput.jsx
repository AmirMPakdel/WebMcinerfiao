import React, { Component } from "react";
import styles from "./TextInput.module.css";

export default class TextInput extends Component {
    
    render(){

        let title = "";
        let title_st = {};
        let input_st = {};
        let add_class = "";

        if(this.props.className){
            add_class += this.props.className+" ";
        }

        if(this.props.direction){
            input_st.direction = this.props.direction;
        }

        if(!this.props.value && !this.props.static_title){
            title_st.opacity = 0;
            title = this.props.title;
        }

        return(
            <div className={styles.tput_con +" "+add_class}>
                
                <div className={styles.tput_title} style={title_st}>{this.props.title}</div>
                
                <input className={styles.tput_input} placeholder={title} value={this.props.value}
                onChange={(e)=>this.props.onChange(e.target.value)} style={input_st}/>

            </div>
        )
    }
}