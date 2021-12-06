import React, { Component } from "react";
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

    state={
        file:null,
        new_image_src:null,
        fileName:null,
        validText:"",
        errorText:"",
    }

    componentDidMount(){
        this.input.onchange= this.onFile;
    }

    onFile =  (e)=>{
        let maxSize = (this.props.maxSize?this.props.maxSize:1);
        let file = e.target.files[0];
        if(!file) return;

        if(file.size < ((maxSize)*1024*1024)){
                
            this.state.errorText="";
            this.setState(this.state);

        }else{
            
            this.setState({
                errorText:"اندازه فایل نباید بیشتر از "+maxSize+" مگابایت باشد.",
                image_style : null,
                editable_mode : false,
                fileName:""
            })

        }
        
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