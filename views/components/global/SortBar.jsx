import React, { Component } from "react";
import styles from "./SortBar.module.css";

export default class SortBar extends Component {

    state = {
        selected : 0
    }

    onSelect = (selected)=>{
        this.setState({selected});
    }
    
    render(){
        return(
            <div className={styles.srtbar}>

                <div className={styles.title}>{"مرتب سازی براساس :"}</div>

                <Btn selected={this.state.selected} number={0} title={"پربازدیدترین"}
                onClick={this.onSelect}/>

                <Btn selected={this.state.selected} number={1} title={"پر فروش ترین"}
                onClick={this.onSelect}/>

                <Btn selected={this.state.selected} number={2} title={"محبوب ترین"}
                onClick={this.onSelect}/>

                <Btn selected={this.state.selected} number={3} title={"جدید ترین"}
                onClick={this.onSelect}/>

                <Btn selected={this.state.selected} number={4} title={"ارزان ترین"}
                onClick={this.onSelect}/>

                <Btn selected={this.state.selected} number={5} title={"گران ترین"}
                onClick={this.onSelect}/>
                
            </div>
        )
    }
}

function Btn(props){

    let add_class = "";

    if(props.selected == props.number){
        add_class += styles.selected_btn + " ";
    }

    return(
        <div className={styles.btn+" amp_btn"+" "+add_class}
        onClick={()=>props.onClick(props.number)}>{props.title}</div>
    )
}