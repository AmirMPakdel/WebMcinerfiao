import axios from "axios";
import chest from "./chest";
import { getCookie } from "./cookie";

const domain = env.DOMAIN;

const urls = {
    
    DOMAIN:domain,
    MEDIA_PREFIX:env.MEDIA_PREFIX,

    //minfo register
    MINFO_REGISTER_CHECK_PHONE_NUMBER: domain+"/api/main/user/checkphonenumber",
    MINFO_LOGIN_WITH_PASSWORD: domain+"/api/main/user/login",
    MINFO_REGISTER_SEND_VERIFICATION_CODE: domain+"/api/main/user/verificationcode/send",
    MINFO_REGISTER_CHECK_VERIFICATION_CODE: domain+"/api/main/user/verificationcode/check",
    MINFO_REGISTER_CHECK_TENANT: domain+"/api/main/user/tenant/check",
    MINFO_REGISTER_COMPLELTE_REGISTRATION: domain+"/api/main/user/register",
    
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

const ErrorHandler = {

    type1:(error)=>{
        console.log(error);
    }
}

const myServer = {
    urls,
    Get,
    Post,
    ErrorHandler,
}

export default myServer;