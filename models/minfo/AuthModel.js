import myServer from "../../utils/myServer";

export default class AuthModel{

    /**
     * 
     * @param {object} params
     * @param {import("../jsdoc/RequestCallback").RequestCallback} cb 
     */
    getPhoneNumberCheck(params, cb){

        cb(null, {result_code:env.SC.SUCCESS});
        return;

        myServer.Post(myServer.urls.MINFO_REGISTER_CHECK_PHONE_NUMBER, params, {}, (err, data)=>{

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
    getLoginWithPassword(params, cb){

        cb(null, {
            result_code:env.SC.SUCCESS, 
            data:{
                token : "j38j5j3409j4355034h6hh3t8hwdfho08",
                username : "امیرمحمد پاکدل"
            }
        })

        return;

        myServer.Post(myServer.urls.MINFO_LOGIN_WITH_PASSWORD, params, {}, (err, data)=>{

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
    getSendVerificationCode(prarams, cb){

        cb(null, {
            result_code:env.SC.SUCCESS,
        })

        return;

        myServer.Post(myServer.urls.MINFO_REGISTER_SEND_VERIFICATION_CODE, params, {}, (err, data)=>{

            if(!err){

                cb(err, data);

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
    getCheckVerificationCode(params, cb){

        cb(null, {
            result_code:env.SC.SUCCESS,
            data:{user_id:1},
        })

        return;

        myServer.Post(myServer.urls.MINFO_REGISTER_CHECK_VERIFICATION_CODE, params, {}, (err, data)=>{

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
    getCheckUsername(params, cb){

        setTimeout(()=>{

            if(Math.random() > 0.5){

                cb(null, {
                    result_code:env.SC.SUCCESS,
                });

            }else{

                cb(null, {
                    result_code:env.SC.REPETITIVE_USERNAME,
                });
            }
            
        }, 1200);

        return;

        myServer.Post("?", params, {}, (err, data)=>{

            if(!err){

                cb(null, data);
            
            }else{

                myServer.ErrorHandler.type1(err);
            }

        });
    }
}