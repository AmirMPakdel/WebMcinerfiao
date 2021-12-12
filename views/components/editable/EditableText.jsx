import React, { Component } from "react";
import styles from "./EditableText.module.css";

/**
* Props of EditableText Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* @property {(text)=>{}} onChange
* @property {string} value
* @property {string} oldValue
* @property {number} maxLength
* 
* @extends {Component<Props>}
*/
export default class EditableText extends Component {
    
    state = {
        readOnly : true,
    }

    onEdit = ()=>{
        this.setState({readOnly : false},
            ()=>{
                this.input.focus()
            });
    }

    onSubmit = ()=>{
        this.setState({readOnly : true});
    }

    onCancel = ()=>{
        this.input.value = this.props.oldValue;
        this.props.onChange(this.props.oldValue);
        this.setState({readOnly : true});
    }

    render(){
        return(
            <div className={styles.con+" bgwi bdc2i "+this.props.className} style={this.props.style}>

                <input ref={r=>this.input=r} 
                className={styles.input} 
                value={this.props.value} 
                readOnly={this.state.readOnly} 
                maxLength={this.props.maxLength}
                onChange={(e)=>this.props.onChange(e.target.value)}/>
                
            </div>
        )
    }
}