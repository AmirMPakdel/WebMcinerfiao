import React, { Component } from "react";
import styles from "./EditContents.module.css";

export default class EditContents extends Component {

    constructor(props){
        super(props);
        this.state.data = props.data;
    }

    state={
        data : [],
        adding_chapter:false
    }

    onAddChapter = ()=>{
        this.setState({adding_chapter:true})
    }

    onNewChapterSubmit = ()=>{

    }

    onNewChapterCancel = ()=>{
        this.setState({adding_chapter:false})
    }
    
    render(){
        return(
            <div className={styles.con}>

                {
                    this.state.data.map((v,i)=>(
                        <Session key={i} data={v}/>
                    ))
                }

                {
                    this.state.adding_chapter?
                    <AddChapter onSubmit={this.onNewChapterSubmit} onCancel={this.onNewChapterCancel}/>:
                    <div className={styles.add_chapter_btn+" amp_btn"} onClick={this.onAddChapter}>{"افزودن سرفصل"}</div>
                }
                                
            </div>
        )
    }
}

class AddChapter extends Component{

    state={
        text : "",
    }

    onInput = (e)=>{
        this.setState({text : e.target.value});
    }

    onSubmit = ()=>{
        this.props.onSubmit(this.state.text);
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

class Session extends Component{
    render(){
        return(
            <div className={styles.sess_con}>

                <div className={styles.sess_title}>
                    {"01 "}
                    <div style={{width:"0.5rem"}}/>
                    {this.props.data.title}
                </div>

            </div>
        )
    }
}