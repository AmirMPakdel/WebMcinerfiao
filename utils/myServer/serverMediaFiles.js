import { getCookie } from "../cookie"
import myServer from "../myServer"

const MediaFiles = {

    publicImage:(uploadKey)=>{
        
        return `${myServer.urls.MEDIA_PREFIX}/public_files/${getCookie(env.TENANT_KEY)}/${uploadKey}.jpg`
    },

    publicVideo:(uploadKey)=>{
        
        return `${myServer.urls.MEDIA_PREFIX}/public_files/${getCookie(env.TENANT_KEY)}/${uploadKey}.mp4`
    },

}

export default MediaFiles;