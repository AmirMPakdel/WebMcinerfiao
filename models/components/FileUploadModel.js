import myServer from "../../utils/myServer";


export default class FileUploadModel{

    /**
     * 
     * @param {object} params
     * @param {import("../jsdoc/RequestCallback").RequestCallback} cb 
     */
    createUploadKey(params, cb){
        
        if(env.MOCKING_SERVER){
            setTimeout(()=>{
                cb(null, {result_code:env.SC.SUCCESS});
            }, 2000, cb);
            return;
        }

        myServer.Post(myServer.urls.UPLOAD_GET_UPLOAD_KEY, params, {}, (err, data)=>{

            if(!err){

                cb(null, data);

            }else{

                myServer.ErrorHandler.type1(err);
            }

        });
    }

    /**
     * 
     * @param {object} params
     * @param {import("../jsdoc/RequestCallback").RequestCallback} cb 
     */
    checkUploadKey(params, cb){
        
        if(env.MOCKING_SERVER){
            setTimeout(()=>{
                cb(null, {result_code:env.SC.SUCCESS});
            }, 2000, cb);
            return;
        }

        myServer.Post(myServer.urls.UPLOAD_COVERTOR_CHECK, params, {}, (err, data)=>{

            if(!err){

                cb(null, data);

            }else{

                myServer.ErrorHandler.type1(err);
            }

        });
    }

    /**
     * 
     * @param {object} params
     * @param {import("../jsdoc/RequestCallback").RequestCallback} cb 
     */
     checkUploadKey(params, cb){
        
        if(env.MOCKING_SERVER){
            setTimeout(()=>{
                cb(null, {result_code:env.SC.SUCCESS});
            }, 2000, cb);
            return;
        }

        myServer.Post(myServer.urls.UPLOAD_COVERTOR_CHECK, params, {}, (err, data)=>{

            if(!err){

                cb(null, data);

            }else{

                myServer.ErrorHandler.type1(err);
            }

        });
    }

    /**
     * 
     * @param {object} params
     * @param {import("../jsdoc/RequestCallback").RequestCallback} cb 
     */
     uploadFile(params, cb){
        
        if(env.MOCKING_SERVER){
            setTimeout(()=>{
                cb(null, {result_code:env.SC.SUCCESS});
            }, 2000, cb);
            return;
        }

        myServer.Post(myServer.urls.UPLOAD_FILE_TO_CONVERTOR, params, {formData:true}, (err, data)=>{

            if(!err){

                cb(null, data);

            }else{

                myServer.ErrorHandler.type1(err);
            }

        });
    }
}