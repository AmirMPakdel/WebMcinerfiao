import myServer from "../../../utils/myServer";

export default class EditCourseBackgrundModel{
    
    /**
    * 
    * @param {object} params
    * @param {import("../jsdoc/RequestCallback").RequestCallback} cb 
    */
    getData(params, cb){
    
        if(env.MOCKING_SERVER){
            setTimeout(()=>{
                cb(null, {result_code:env.SC.SUCCESS});
            }, 2000, cb);
            return;
        }
    
        myServer.Post(myServer.urls.COURSE_EDIT+env.EP.EDIT_PARAM_COVER, params, {}, (err, data)=>{
    
            if(!err){
            
                cb(null, data);
            
            }else{
            
                myServer.ErrorHandler.type1(err);
            }
        });
    }
    
    
}