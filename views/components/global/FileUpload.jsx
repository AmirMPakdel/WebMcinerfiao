import React, { Component } from "react";
import FileUploadController from "../../../controllers/components/FileUploadController";
//import styles from "./FileUpload.module.css";

/**
* Props of FileUpload Component
* @typedef Props
* @property {string} className
* @property {(file, file_name, img_src)} onFile
* @property {number} maxSize size in MB
* 
* @extends {Component<Props>}
*/
export default class FileUpload extends Component {

    constructor(props){
        super(props);

        this.controller = new FileUploadController(this);

        this.state={
            file:null,
        }
    }
    
    componentDidMount(){
        this.input.onchange= this.onFile;
    }

    onFile =  (event)=>{
        this.controller.onFile(event);
    }

    onClick=()=>{
        this.input.click();
    }

    render(){
        return(
            <div onClick={this.onClick}>

                <input style={{display:"none"}}
                type={"file"}
                ref={r=>this.input=r}/>

                {
                    this.props.children
                }

            </div>
        )
    }
}