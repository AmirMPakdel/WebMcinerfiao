import React, { Component } from "react";
import styles from "./TextInput.module.css";

/**
* Props of TextInput Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* @property {React.CSSProperties} titleStyle
* @property {string} title
* @property {string} placeholder
* 
* @extends {Component<Props>}
*/
export default class TextInput extends Component {

    onChange=(e)=>{

        if(this.props.onChange){
            this.props.onChange(e.target.value);
        }

        this.input.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
    }
    
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

        if(this.props.error){

            add_class += " beci ";
        }

        return(
            <div className={styles.tput_con +" "+add_class} style={this.props.style}>
                
                {
                    this.props.title?
                    <div className={styles.tput_title} style={{...title_st, ...this.props.titleStyle}}>{this.props.title}</div>:null
                }
                
                <input className={styles.tput_input+" bdyt "} 
                placeholder={this.props.placeholder} 
                value={this.props.value}
                onChange={this.onChange} 
                style={input_st}
                ref={r=>this.input=r}/>

                {
                    this.props.error?
                    <div className={styles.error+" fec"}>{this.props.error}</div>:null
                }

            </div>
        )
    }
}