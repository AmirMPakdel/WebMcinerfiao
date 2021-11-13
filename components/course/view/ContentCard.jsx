import React, { Component } from "react";
import styles from "./ContentCard.module.css";
import {Collapse} from "react-collapse";
import IconLine from "./IconLine";

export default class ContentCard extends Component {
    
    state={ open:false }

    toggle = ()=>{
        this.setState({open:!this.state.open})
    }

    render(){

        let src="./svg/closed_ccard_icn.svg";
        if(this.state.open){src="./svg/opened_ccard_icn.svg"}

        return(
            <div className={styles.ccard_con}>

                <div className={styles.iclne}>

                    <img className={styles.iclne_img+" amp_btn"} src={src}
                    onClick={this.toggle}/>

                    <div className={styles.iclne_txt+" amp_btn"}
                    onClick={this.toggle}>
                        {this.props.text}
                    </div>

                </div>

                <Collapse className={styles.Collapse} isOpened={this.state.open}>
                    <div style={{height:"0.5rem"}}/>
                    <IconLine icon="./svg/crs_play_icn.svg" text={"عرض سلام و خسته نباشید"}/>
                    <IconLine icon="./svg/crs_document_icn.svg" text={"عرض سلام و خسته نباشید"}/>
                    <IconLine icon="./svg/crs_document_icn.svg" text={"عرض سلام و خسته نباشید"}/>
                    <IconLine icon="./svg/crs_play_icn.svg" text={"عرض سلام و خسته نباشید"}/>
                </Collapse>
            </div>
        )
    }
}