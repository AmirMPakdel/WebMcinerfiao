import React, { Component } from "react";
import styles from "./SelectBox.module.css";

/**
 * @typedef Props 
 * @property {string} className
 * @property {React.CSSProperties} style
 * @property {string} borderColorClassName
 * @property {()=>{}} onRemove
 * @property {()=>{}} onAdd
 * 
 * @extends {Component<Props>}
 */
export default class SelectBox extends Component {

    onAdd=()=>{
        if(!this.props.editable)return;

        this.props.onAdd();
    }

    onRemove=(obj)=>{
        if(!this.props.editable)return;
        
        this.props.onRemove(obj)
    }
    
    render(){

        let addClass = "";

        if(this.props.className){

            addClass += this.props.className+" ";
        }

        if(this.props.borderColorClassName){

            addClass += this.props.borderColorClassName+" ";
        
        }else{

            addClass += "bdc2 ";
        }

        return(
            <div className={styles.con+" bglc1 "+addClass}>

                {
                    this.props.data && this.props.data.length?
                    this.props.data.map((v,i)=>(
                        <Label key={i}
                        title={v.title}
                        editable={this.props.editable}
                        onClick={()=>this.onRemove(v)}/>
                    )):null
                }

                {
                    !this.props.editable && !this.props.data.length?
                    <div className={styles.empty+" fdc2 tilt"}>
                        {this.props.emptyText?this.props.emptyText:"آیتمی انتخاب نشده است"}
                    </div>:null
                }

                {
                    this.props.editable?
                    <img className={styles.add_btn+" amp_btn bgtc1"} 
                    src={"/svg/closed_ccard_icn.svg"}
                    onClick={this.onAdd}/>:null
                }

            </div>
        )
    }
}

function Label(props){


    let addClass = "";
    if(props.editable){
        addClass = "amp_btn"
    }
    return(
        <div className={styles.label_con+" bglc2 bdyt fdc1 "+addClass} onClick={props.onClick}>
            
            {props.title}

            {
                props.editable?
                <img className={styles.label_remove_icon} src={"/svg/modal_close.svg"}/>:
                null
            }
            
        </div>
    )
}