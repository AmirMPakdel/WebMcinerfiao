import axios from "axios";
import chest from "./chest";
import { getCookie } from "./cookie";

const domain = env.DOMAIN;

const myServer = {

    urls:{
        DOMAIN:domain,
        MEDIA_PREFIX:env.MEDIA_PREFIX,

        //global
        GET_PROVINCES:domain+"/api/v1/provinces",
    },

    Get,
    Post,
}

/**
 * 
 * @param {string} url 
 * @param {import("axios").AxiosRequestConfig} config 
 * @param {(err, data)=>{}} cb
 */
function Get(url, config, cb){

    if(!config.noAuthorization){
        config.headers={
            'Authorization': "Bearer "+getCookie(env.TOKEN_KEY), 
        }
    }

    axios.get(url, config).then(res=>{

        if(env.ENVIRONMENT_MODE==="dev"){
            console.log(res);
        }
        cb(null, res.data);

    }).catch(e=>{
        
        if(e.response && e.response.data){

            if(env.ENVIRONMENT_MODE==="dev"){
                console.log(e.response);
            }
            cb(e, e.response);
            if(!config.hideNotif && e.response.data){
                let data = e.response.data;
                let error = data.error;
                if(error){
                    let error_array = Object.keys(error);
                    error_array.forEach((key)=>{
                        if(typeof error[key] === "string"){
                            chest.openNotification(error[key], null, "error");
                        }else if(typeof error[key].forEach === 'function'){
                            error[key].forEach((v)=>{
                                chest.openNotification(v, null, "error");
                            });
                        }
                    })
                }
            }

        }else{

            cb(e, {});
        }
    });
}

/**
 * 
 * @param {string} url 
 * @param {object} data
 * @param {import("axios").AxiosRequestConfig} config
 * @param {(err, data)=>{}} cb
 */
function Post(url, data, config={}, cb){

    if(!config.noAuthorization){
        config.headers={
            'Authorization': "Bearer "+getCookie(env.TOKEN_KEY), 
        }
    }

    axios.post(url, data, config).then((res)=>{
                
        if(env.ENVIRONMENT_MODE==="dev"){
            console.log(res);
        }

        if(res.status == 200){
            cb(null, res.data);
        }

    }).catch((e)=>{

        if(e.response && e.response.data){

            if(env.ENVIRONMENT_MODE==="dev"){
                console.log(e.response);
            }
            cb(e, e.response);
            if(!config.hideNotif && e.response.data){
                let data = e.response.data;
                let error = data.error;
                if(error){
                    let error_array = Object.keys(error);
                    error_array.forEach((key)=>{
                        if(typeof error[key] === "string"){
                            chest.openNotification(error[key], null, "error");
                        }else if(typeof error[key].forEach === 'function'){
                            error[key].forEach((v)=>{
                                chest.openNotification(v, null, "error");
                            });
                        }
                    })
                }
            }

        }else{

            cb(e, {});
        }
    });
}

export default myServer;