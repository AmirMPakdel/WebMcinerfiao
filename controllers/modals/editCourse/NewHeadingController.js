import NewHeadingModel from "../../../models/modals/editCourse/NewHeadingModel";
import chest from "../../../utils/chest";
import { getUrlPart } from "../../../utils/helpers";
import NewHeadingModal from "../../../views/components/modal/editCourse/NewHeadingModal";

export default class NewHeadingController{
    
    /**@param {NewHeadingModal} view*/
    constructor(view){
        this.view = view;
        this.model = new NewHeadingModel();
    }

    onCancel(){

        chest.ModalLayout.closeAndDelete(1);
    }

    onInput(t){

        this.view.setState({heading:t}, this.continueCheck);
    }

    continueCheck=()=>{

        let can = true;
        let s = this.view.state;
        
        if(s.heading.length < 4){
            can = false;
        }

        this.view.setState({can_continue:can});
    }
    
    create(){
        
        let s = this.view.state;

        if(!s.can_continue){return};

        let params = {
            course_id: getUrlPart(3),
            title: s.heading,
        }

        this.model.save(params, (err, data)=>{

            if(data.result_code === env.SC.SUCCESS){

                chest.openNotification("سرفصل جدید ایجاد شد.", "success");

                

                this.onCancel();
            }
        })
    }
    
}