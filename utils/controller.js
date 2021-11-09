import { Component } from "react";
import { notification } from 'antd';
import { CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

let controller = {
    
}

export class ControllerComponent extends Component{
    
    componentDidMount(){
        controller.disableBodyVerticalScroll = this.disableBodyVerticalScroll;
        controller.enableBodyVerticalScroll = this.enableBodyVerticalScroll;
        controller.disableAllAntDTooltips = this.disableAllAntDTooltips;
        controller.enableAllAntDTooltips = this.enableAllAntDTooltips;
        controller.openNotification = this.openNotification;

        this.onResize();
        window.addEventListener("resize", this.onResize);

        this.enableAllAntDTooltips();
    }

    componentWillUnmount(){
        controller.disableBodyVerticalScroll = ()=>{};
        controller.enableBodyVerticalScroll = ()=>{};
        controller.disableAllAntDTooltips = ()=>{};
        controller.enableAllAntDTooltips = ()=>{};
        controller.openNotification = ()=>{};
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

export default controller;