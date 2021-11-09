import React, { Component } from "react";
import styles from "./EditWhatWeLearn.module.css";

export default class EditWhatWeLearn extends Component {

    constructor(props){
        super(props);
        this.state.what_we_learn_old = props.data;
        this.state.next_order = props.data.length+1;
    }

    state = {
        what_we_learn_old : [],
        adding:false,
        next_order : 0,
    }

    onAdd = ()=>{
        this.setState({adding:true});
    }

    onAddCancel = ()=>{
        this.setState({adding:false});
    }

    onAddSubmit = (obj)=>{
        this.state.what_we_learn_old.push(obj);
        this.state.adding = false;
        this.state.next_order++;
        console.log(this.state);
        this.setState(this.state);
    }

    render(){
        return(
            <div className={styles.con}>
                {
                    this.state.what_we_learn_old.map((v,i)=>(
                        <EditableLine data={this.state.what_we_learn_old[i]}/>
                    ))
                }
                {
                    !this.state.adding?
                    <div className={styles.add_btn+" amp_btn"} onClick={this.onAdd}>{"افزودن مورد"}</div>:
                    <AddingLine order={this.state.next_order} onCancel={this.onAddCancel} onSubmit={this.onAddSubmit}/>
                }
            </div>
        )
    }
}

class EditableLine extends Component{

    constructor(props){
        super(props);
        this.state.old_data = props.data
        this.state.order = props.data.order;
        this.state.text = props.data.text;
    }

    state={
        readOnly: true,
        old_data : {},
        order : 0,
        text : "",
    }

    onInput = (e)=>{
        this.setState({text : e.target.value});
    }

    onEdit = ()=>{
        this.input.focus();
        this.setState({
            readOnly:false,
        })
    }

    onDelete = ()=>{

    }

    onSubmit = ()=>{
        this.setState({
            readOnly:true,
            old_data: {
                order:this.state.order,
                text:this.state.text,
            }
        })
    }

    onCancel = ()=>{
        this.setState({
            readOnly:true,
            text: this.state.old_data.text,
        })
    }

    render(){
        return(
            <div className={styles.line_con}>

                <input ref={r=>this.input=r} className={styles.edln_input} value={this.state.text}
                readOnly={this.state.readOnly} onChange={this.onInput}/>

                {
                    this.state.readOnly?<>
                    <div className={styles.edln_edit+" amp_btn"} onClick={this.onEdit}>{"ویرایش"}</div>
                    <div className={styles.edln_delete+" amp_btn"} onClick={this.onDelete}>{"حذف"}</div></>
                    :<><div className={styles.edln_submit+" amp_btn"} onClick={this.onSubmit}>{"ثبت"}</div>
                    <div className={styles.edln_cancel+" amp_btn"} onClick={this.onCancel}>{"انصراف"}</div></>
                }

            </div>
        )
    }
}

class AddingLine extends Component{

    state={
        text : "",
    }

    onInput = (e)=>{
        this.setState({text : e.target.value});
    }

    onSubmit = ()=>{
        let obj = {
            order : this.props.order,
            text : this.state.text,
        }
        this.props.onSubmit(obj);
    }

    render(){
        return(
            <div className={styles.line_con}>

                <input className={styles.edln_input} value={this.state.text}
                readOnly={this.state.readOnly} onChange={this.onInput}/>
                
                <div className={styles.edln_submit+" amp_btn"} onClick={this.onSubmit}>{"ثبت"}</div>
                
                <div className={styles.edln_cancel+" amp_btn"} onClick={this.props.onCancel}>{"انصراف"}</div>

            </div>
        )
    }
}