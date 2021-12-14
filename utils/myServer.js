import axios from "axios";
import chest from "./chest";
import { getCookie } from "./cookie";
import { Object2FormData } from "./helpers";

const domain = env.DOMAIN;
const prefixes = env.PREFIXES;

const urls = {
    
    DOMAIN:domain,
    MEDIA_PREFIX:env.MEDIA_PREFIX,

    //minfo register
    MINFO_REGISTER_CHECK_PHONE_NUMBER: domain+prefixes.MA+"/user/checkphonenumber",
    MINFO_LOGIN_WITH_PASSWORD: domain+prefixes.MA+"/user/login",
    MINFO_REGISTER_SEND_VERIFICATION_CODE: domain+prefixes.MA+"/user/verificationcode/send",
    MINFO_REGISTER_CHECK_VERIFICATION_CODE: domain+prefixes.MA+"/user/verificationcode/check",
    MINFO_REGISTER_CHECK_TENANT: domain+prefixes.MA+"/user/tenant/check",
    MINFO_REGISTER_COMPLELTE_REGISTRATION: domain+prefixes.MA+"/user/register",

    // upload
    UPLOAD_GET_UPLOAD_KEY: domain+prefixes.UTA+"/upload/uploadkey",
    UPLOAD_COVERTOR_CHECK: env.CONVERTOR_DOMAIN+"/upload_check",
    UPLOAD_FILE_TO_CONVERTOR: env.CONVERTOR_DOMAIN+"/upload_progress",

    //minfo educators
    DASH_CREATE_EDUCATOR: domain+prefixes.UTA+"/educators/create",
    DASH_FETCH_EDUCATORS: domain+prefixes.UTA+"/educators/fetch",
    DASH_UPDATE_EDUCATOR: domain+prefixes.UTA+"/educators/update",
    DASH_DELETE_EDUCATOR: domain+prefixes.UTA+"/educators/delete",

    //course category
    CATEGORY_FETCH: domain+prefixes.PTA+"/categories/fetch",

    //course
    COURSE_CREATE: domain+prefixes.UTA+"/courses/create",
    COURSE_FETCH: domain+prefixes.UTA+"/course/load",
    COURSE_EDIT: domain+prefixes.UTA+"/course/edit/",

}

/**
 * 
 * @param {string} url 
 * @param {import("axios").AxiosRequestConfig} config 
 * @param {(err, data)=>{}} cb
 */
function Get(url, config, cb){

    if(!config.noTenant){
        if(!config.headers){config.headers = {};}
        config.headers["X-TENANT"] = getCookie(env.TENANT_KEY);
    }

    if(!config.noToken){
        if(!config.params){config.params = {};}
        config.params["token"] = getCookie(env.TOKEN_KEY);
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

    if(!config.noTenant){
        if(!config.headers){config.headers = {};}
        config.headers["X-TENANT"] = getCookie(env.TENANT_KEY);
    }

    if(!config.noToken){
        if(!data){data = {}};
        data["token"] = getCookie(env.TOKEN_KEY);
    }

    if(config.formData){
        data = Object2FormData(data);
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