import React, { Component } from "react";
import styles from "./ChangePassword.module.css";

/**
* Props of ChangePassword Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class ChangePassword extends Component {

    constructor(props){

        super(props);

        //this.controller = new AuthController(this);

        this.state={
            page: "RegisterPage",

            mobile:"",
            password:"",
            sms_code:"",
            register_password:"",
            password_confirm:"",


            timer:0,
            timer_text:"",
        }
    }
    
    render(){
        return(
            <div>
                
            </div>
        )
    }
}