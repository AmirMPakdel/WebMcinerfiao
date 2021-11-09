import React, { Component } from "react";
import styles from "./EditableImage.module.css";

export default class EditableImage extends Component {
    
    state = {
        editable_mode : false,
        image_style : {},
        new_image_src : null,
    }

    componentDidMount(){

        if(this.props.image_src){
            this.setState({
                image_style : {backgroundImage:`url(${this.props.image_src})`}
            });
        }

        this.input.onchange = (e)=>{
    
            let file = e.target.files[0];
            let url = URL.createObjectURL(file);
            let img = new Image();
            img.src = url;
            
            img.onload = ()=>{

                this.state.new_image_src = img.src;

                this.setState({
                    image_style : {backgroundImage:`url(${img.src})`},
                    editable_mode : true
                });
    
                if(file.size < (2*1024*1024)){
                    
                    // let formData = new FormData();
                    // formData.append("token", getCookie("_ca"));
                    // formData.append("image", file);
                    // formData.append("action", "create");
                    // Axios.post(Server.domain+Server.urls.UPLOAD_NCI, formData).then(res=>{
                      
                    //   let {data} = res;
                    //   if(data.result_code == Server.ResultCode.SUCCESS){
                    //     this.karte_meli = file;
                    //     this.state.kartmeli_img = img.src;
                    //     this.state.kartmeli_img_empty =false;
                    //     this.setState(this.state);
                    //   }else{
                        
                    //     //Controller.openNotification("خطا در آپلود عکس", null, "error");
                    //   }
                    // });
    
                }else{
                    alert("bigger than 2mb")
                    //Controller.openNotification("خطای بارگذاری عکس", "عکس انتخابی حجم بالای 2 مگابایت دارد","error")
                }
            };
        }
    }

    onEdit = ()=>{
        this.input.click();
    }

    onSubmit = ()=>{
        // upload the image to server and get new url
    }

    onCancel = ()=>{
        if(this.props.image_src){
            this.setState({
                image_style : {backgroundImage:`url(${this.props.image_src})`},
                editable_mode : false
            });
        }
    }

    render(){

        let image_add_class = "";
        if(this.props.image_className){
            image_add_class += this.props.image_className+" ";
        }

        return(
            <div className={styles.con}>

                <div className={styles.image+" "+image_add_class} value={this.props.value} 
                readOnly={this.state.readOnly} onChange={(e)=>this.props.onChange(e.target.value)}
                style={this.state.image_style}/>

                <input ref={r=>this.input=r} type="file" accept=".jpg, .png" style={{display:"none"}}/>

                {
                    !this.state.editable_mode?
                    <div className={styles.edit_btn+" amp_btn"} onClick={this.onEdit}>
                        {"بارگذاری"}
                    </div>:
                    <>
                    <div className={styles.submit_btn+" amp_btn"} onClick={this.onSubmit}>
                        {"ثبت"}
                    </div>
                    <div className={styles.cancel_btn+" amp_btn"} onClick={this.onCancel}>
                        {"انصراف"}
                    </div>
                    </>
                }
                
            </div>
        )
    }
}