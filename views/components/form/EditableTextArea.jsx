import React, { Component } from "react";
import styles from "./EditableTextArea.module.css";

export default class EditableTextArea extends Component {
    
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
        this.props.onSubmit();
        this.setState({readOnly : true});
    }

    onCancel = ()=>{
        this.input.value = this.props.old_value;
        this.props.onChange(this.props.old_value);
        this.setState({readOnly : true});
    }

    render(){

        let texteara_addClass = "";
        if(this.props.texteara_className){
            texteara_addClass += this.props.texteara_className+" ";
        }

        return(
            <div className={styles.con}>

                <textarea ref={r=>this.input=r} className={styles.input+" "+texteara_addClass} value={this.props.value} 
                readOnly={this.state.readOnly} onChange={(e)=>this.props.onChange(e.target.value)}/>

                {
                    this.state.readOnly?
                    <div className={styles.edit_btn+" amp_btn"} onClick={this.onEdit}>
                        {"ویرایش"}
                    </div>:
                    <>
                    <div className={styles.submit_btn+" amp_btn"} onClick={this.onSubmit}>
                        {"ثبت"}
                    </div>
                    <div className={styles.cancel_btn+" amp_btn"} onClick={this.onCancel}>
                        {"انصراف"}
                    </div>
                    </>
                }
                
            </div>
        )
    }
}