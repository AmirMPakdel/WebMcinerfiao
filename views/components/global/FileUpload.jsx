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

        if(this.props.notImage){

            if(file.size < ((maxSize)*1024*1024)){

                this.state.errorText="";

                this.setState({
                    editable_mode : true,
                    fileName:file.name,
                }, ()=>{

                    this.props.onFile && this.props.onFile(file, file.name);
                });

            }else{
                
                this.props.onFile && this.props.onFile(null, null, null);

                this.setState({
                    errorText:"اندازه فایل نباید بیشتر از "+maxSize+" مگابایت باشد.",
                    editable_mode : false,
                    fileName:""
                });
            }

        }else{
            let url = URL.createObjectURL(file);
            let img = new Image();
            img.src = url;
            img.onload = ()=>{

                if(file.size < ((maxSize)*1024*1024)){
                    this.state.new_image_src = img.src;
                    this.state.errorText="";
                    this.setState({
                        image_style : {backgroundImage:`url(${img.src})`},
                        editable_mode : true,
                        fileName:file.name,
                    }, ()=>{
                        this.props.onFile && this.props.onFile(file, file.name, img.src);
                    });

                }else{
                    
                    this.props.onFile && this.props.onFile(null, null, null);
                    this.setState({
                        errorText:"اندازه فایل نباید بیشتر از "+maxSize+" مگابایت باشد.",
                        image_style : null,
                        editable_mode : false,
                        fileName:""
                    });
                }
            };
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