import { Component } from "react";
import { notification } from 'antd';
import { CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import "../models/jsdoc/User"

let chest = {

    /**@type {User} */
    user : null,
    
    UserPanel:{

        userChangeTab: (jsx)=>{},
    },

    ModalLayout:{

        controlModal: (visible, jsx, options)=>{},
    },

    disableBodyVerticalScroll : ()=>{},
    enableBodyVerticalScroll : ()=>{},
    disableAllAntDTooltips : ()=>{},
    enableAllAntDTooltips : ()=>{},
    openNotification : ()=>{},
}

export class ChestComponent extends Component{
    
    componentDidMount(){
        chest.disableBodyVerticalScroll = this.disableBodyVerticalScroll;
        chest.enableBodyVerticalScroll = this.enableBodyVerticalScroll;
        chest.disableAllAntDTooltips = this.disableAllAntDTooltips;
        chest.enableAllAntDTooltips = this.enableAllAntDTooltips;
        chest.openNotification = this.openNotification;

        this.onResize();

        window.addEventListener("resize", this.onResize);

        this.enableAllAntDTooltips();

        setColors();
    }

    componentWillUnmount(){
        chest.disableBodyVerticalScroll = ()=>{};
        chest.enableBodyVerticalScroll = ()=>{};
        chest.disableAllAntDTooltips = ()=>{};
        chest.enableAllAntDTooltips = ()=>{};
        chest.openNotification = ()=>{};
    }

    onResize=()=>{
        // rem
        if (window.innerWidth > 1600) {
            // let rem = (window.innerWidth * 16) / 1600;
            // document.getElementsByTagName("html")[0].style.fontSize = `${rem}px`;
        } else if (window.innerWidth < 360) {
            let rem = (window.innerWidth * 16) / 362;
            document.getElementsByTagName("html")[0].style.fontSize = `${rem}px`;
        } else {
            document.getElementsByTagName("html")[0].style.fontSize = `${16}px`;
        }
    }

    disableBodyVerticalScroll = ()=>{
        document.getElementsByTagName("body")[0].style.overflowY="hidden";
        document.getElementsByTagName("body")[0].style.overflowX="hidden";
    }

    enableBodyVerticalScroll = ()=>{
        document.getElementsByTagName("body")[0].style.overflowY="visible";
        document.getElementsByTagName("body")[0].style.overflowX="unset";
    }

    disableAllAntDTooltips = ()=>{
        let tooltip = document.getElementsByClassName('ant-tooltip');
        for(let i = 0; i < tooltip.length; i++) {
            tooltip[i].style.display = 'none';
        }
    }

    enableAllAntDTooltips = ()=>{
        let tooltip = document.getElementsByClassName('ant-tooltip');
        for(let i = 0; i < tooltip.length; i++) {
            tooltip[i].style.display = 'block';
        }
    }

    openNotification = (title, icon, options) => {

        if(!options){options={}}
      
        if(!options.duration){options.duration=5}
      
        if(!options.description){options.description = ""};
      
        if(icon=="error"){icon=<ExclamationCircleOutlined style={{ color: '#C70000' }}/>}
        if(icon=="success"){icon=<CheckCircleOutlined style={{ color: '#129826' }}/>}
        if(icon=="alert"){icon=<ExclamationCircleOutlined style={{ color: '#EFB569' }}/>}
      
        notification.open({
          message: title,
          duration:options.duration,
          description: options.description,
          icon,
        });
      };

    render(){
        return null;
    }
}

function setColors(){

    // let tc1 = getCookie("tc1");

    // let sheet = document.createElement('style')
    // sheet.innerHTML = `.bgtc1 {background-color: ${tc1};}`;
    // document.body.appendChild(sheet);
}

export default chest;