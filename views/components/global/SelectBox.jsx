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
        this.props.onAdd();
    }

    onRemove=(obj)=>{
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

            addClass += "blc2 ";
        }

        return(
            <div className={styles.con+" "+addClass}>

                {
                    this.props.data && this.props.data.length?
                    this.props.data.map((v,i)=>(
                        <Label key={i}
                        title={v.title}
                        onClick={()=>this.onRemove(v)}/>
                    )):null
                }

                <img className={styles.add_btn+" amp_btn bgtc1"} 
                src={"/svg/closed_ccard_icn.svg"}
                onClick={this.onAdd}/>

            </div>
        )
    }
}

function Label(props){

    return(
        <div className={styles.label_con+" amp_btn bglc2 bdyt fdc1"} onClick={props.onClick}>
            
            {props.title}

            <img className={styles.label_remove_icon} src={"/svg/modal_close.svg"}/>
            
        </div>
    )
}