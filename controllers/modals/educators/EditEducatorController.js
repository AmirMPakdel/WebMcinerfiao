import EditEducatorModel from "../../../models/modals/educators/EditEducatorModel";
import Validation from "../../../utils/validation";
import EditEducatorModal from "../../../views/components/modal/Educators/EditEducatorModal";

export default class EditEducatorController{
    
    /**@param {EditEducatorModal} view*/
    constructor(view){
        this.view = view;
        this.model = new EditEducatorModel();
    }
    
    editEducator(){

        if(this.lock)return;

        let res = this.editEducatorInputCheck();
        
        if(res){

            this.lock = true;

            this.view.setState({btn_loading:true})

            let vs = this.view.state;
            let params = {
                educator_id: vs.educator.id,
                first_name : vs.first_name,
                last_name : vs.last_name,
                bio : vs.bio,
            }

            if(vs.upload_key){
                params.upload_key = vs.upload_key;
            }

            this.model.editEducator(params, (err, data)=>{

                this.view.setState({btn_loading:false});

                if(data.result_code === env.SC.SUCCESS){

                    chest.openNotification("دبیر با موفقیت ویرایش شد.", "success");

                    this.view.onCancel();

                }else if(data.result_code === env.SC.INVALID_UPLOAD_KEY){

                    //TODO:handle this error
                    chest.openNotification("DEV::INVALID_UPLOAD_KEY", "error");

                }else if(data.result_code === env.SC.CONVERTOR_SERVER_ISSUE_MOVING_FILE){

                    //TODO:handle this error
                    chest.openNotification("DEV::CONVERTOR_SERVER_ISSUE_MOVING_FILE", "error");
                }

                this.lock = false;
            })
        }
    }

    editEducatorInputCheck(){

        let vs = this.view.state;
        let fn = Validation.persianName(vs.first_name);
        let ln = Validation.persianName(vs.last_name);

        let newState = {};
        let can = true;

        if(fn.valid){
            newState.first_name_error = false;
        }else{
            newState.first_name_error = fn.message;
            can = false;
        }

        if(ln.valid){
            newState.last_name_error = false;
        }else{
            newState.last_name_error = ln.message;
            can = false;
        }

        this.view.setState(newState);

        return can;
    }
    
}