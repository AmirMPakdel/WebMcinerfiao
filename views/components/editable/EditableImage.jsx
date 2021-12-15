import React, { Component } from "react";
import styles from "./EditableImage.module.css";
import chest from "../../../utils/chest";

/**
* Props of EditableImage Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditableImage extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            image_file: null,
            image_url: "https://gamefa.com/wp-content/uploads/2021/12/Spider-Man-No-Way-Home-Iron-Spider-suit.webp"
        }
    }
    
    componentDidMount(){
    }

    onInputClick=()=>{
        //!important - reset the values so selection same file would fire "onChange" event
        this.input.files = null;
        this.input.value = null;
    }

    onInputChange=(e)=>{

        let file = e.target.files[0];
        let url = URL.createObjectURL(file);
        let img = new Image();
        img.src = url;
        
        img.onload = ()=>{

            this.setState({
                image_url : img.src,
                image_file: file,
            }, ()=>{
                this.props.onSelect();
            });

            if(file.size < (2*1024*1024)){

            }else{
                chest.openNotification("عکس انتخابی حجم بالای 2 مگابایت دارد", "error");
            }
        };
    }

    onEdit = ()=>{
        this.input.click();
    }

    onCancel = ()=>{
        //TODO:
        this.setState({
            image_url: "https://gamefa.com/wp-content/uploads/2021/12/Spider-Man-No-Way-Home-Iron-Spider-suit.webp"
        })
    }
    
    render(){
        return(
            <div className={styles.con+" bdc2 md_card_shd "+this.props.className}
            style={{
                backgroundImage: `url(${this.state.image_url})`
            }}>

                <input ref={r=>this.input=r} 
                onClick={this.onInputClick}
                onChange={this.onInputChange}
                type="file" accept=".jpg, .png" 
                style={{display:"none"}}/>

            </div>
        )
    }
}