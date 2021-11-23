import React, { Component } from "react";
import price from "../../utils/price";
import styles from "./EditablePrice.module.css";

export default class EditablePrice extends Component {
    
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
        return(
            <div className={styles.con}>

                {
                    this.state.readOnly?
                    <input ref={r=>this.input=r} className={styles.input} value={price(this.props.value)+" تومان"}
                    readOnly={this.state.readOnly} onChange={(e)=>this.props.onChange(e.target.value)}/>
                    :
                    <input ref={r=>this.input=r} className={styles.input} value={this.props.value}
                    readOnly={this.state.readOnly} onChange={(e)=>this.props.onChange(e.target.value)}/>
                }
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