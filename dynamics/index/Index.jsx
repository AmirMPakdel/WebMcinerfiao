import React, { Component } from "react";
import styles from "./Index.module.css";

export default class Index extends Component {

    componentDidMount(){
        document.title="سایت فروش آموزش آنلاین مینفو"
    }
    
    render(){
        return(
            <div className={"hrot"}>
                Hi
            </div>
        )
    }
}