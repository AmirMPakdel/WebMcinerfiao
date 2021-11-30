import myServer from "../../utils/myServer";

export default class AuthModel{

    /**
     * 
     * @param {object} params
     * @param {RequestCallback} cb 
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
     * @param {RequestCallback} cb 
     */
    getLoginWithPassword(params, cb){

        cb(null, {
            request_code:1000, 
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
}