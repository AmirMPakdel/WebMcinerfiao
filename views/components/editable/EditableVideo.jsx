import React, { Component } from "react";
import styles from "./EditableVideo.module.css";
import chest from "../../../utils/chest";

/**
* Props of EditableVideo Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditableVideo extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            image_file: null,
            image_url: null
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
        // this.video.src = URL.createObjectURL(file);
        // this.video.load();

        if(file.size < (120*1024*1024)){

            this.setState({
                image_url : URL.createObjectURL(file),
                image_file: file,
            }, ()=>{
                this.props.onSelect();
            });

        }else{
            chest.openNotification("عکس انتخابی حجم بالای 2 مگابایت دارد", "error");
        }
    }

    onEdit = ()=>{
        this.input.click();
    }

    onCancel = ()=>{
        //TODO:
        this.setState({
            image_url: "https://dl.gamefa.com/user2/video/2021/Y2Mate.is%20-%20SPIDER-MAN%20NO%20WAY%20HOME%20-%20Watching%20%20In%20Cinemas%20December%2016%20%20English%2C%20Hindi%2C%20Tamil%20%26%20Telugu-T1ysN8SWkCo-1080p-1639116407835.mp4"
        })
    }
    
    render(){
        return(
            <div className={styles.con+" bdc2 md_card_shd "+this.props.className}>

                {
                    this.state.image_url?
                    <video className={styles.video} 
                    ref={r=>this.video=r}
                    src={this.state.image_url}
                    controls={true} preload={false}/>
                    :
                    <img className={styles.video} src={this.props.defaultPoster}/>   
                }
                
                <input ref={r=>this.input=r} 
                onClick={this.onInputClick}
                onChange={this.onInputChange}
                type="file" accept=".mp4" 
                style={{display:"none"}}/>

            </div>
        )
    }
}