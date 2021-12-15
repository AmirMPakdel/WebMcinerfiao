import EditCourseLogoModel from "../../../models/components/editCourse/EditCourseLogoModel";
import { getCookie } from "../../../utils/cookie";
import { getUrlPart } from "../../../utils/helpers";
import EditCourseLogo from "../../../views/components/editCourse/EditCourseLogo";

export default class EditCourseLogoController{
    
    /**@param {EditCourseLogo} view*/
    constructor(view){
        this.view = view;
        this.model = new EditCourseLogoModel();
    }

    onEdit(){

        this.view.EditableImage.onEdit();
    }

    onSelect(){

        let status = this.view.props.parent.state.status;
        status.logo = "edit";
        this.view.props.parent.setState({status});
    }

    onCancel(){

        this.view.EditableImage.onCancel();

        let status = this.view.props.parent.state.status;
        status.logo = "idle";
        this.view.props.parent.setState({status});
    }

    onSubmit(image_file){

        console.log(image_file);

        let status = this.view.props.parent.state.status;
        status.logo = "loading";
        this.view.props.parent.setState({status});

        let params1={
            file_size:image_file.size,
            file_type:image_file.type,
            token: getCookie(env.TOKEN_KEY),
            upload_type: env.UT.UPLOAD_TYPE_MAIN_PAGE_COVER,
            course_id: getUrlPart(3)
        }

        this.model.getUploadKey(params1, (err, data)=>{

            if(data.result_code === env.SC.SUCCESS){

                let params2 = {
                    token: params1.token,
                    file_type: params1.file_type,
                    upload_type: params1.upload_type,
                    course_id: params1.course_id,
                    tenant: getCookie(env.TENANT_KEY),
                    upload_key: data.data.upload_key,
                }

                this.checkUploadKey(image_file, params1, params2);
            }
        });
    }

    checkUploadKey(image_file, params1, params2){

        this.model.checkUploadKey(params2, (err, data)=>{

            if(data.result_code === env.CSC.SUCCESS){

                let params3 = {
                    mfile: image_file,
                    tenant: params2.tenant,
                    upload_id: data.data.upload_id,
                    upload_key: params2.upload_key,
                }

                this.uploadFile(params3);
            }
        });
    }

    uploadFile(params3){

        this.model.uploadFile(params3, (err, data)=>{

            if(data.result_code === env.CSC.SUCCESS){

                let status = this.view.props.parent.state.status;
                status.logo = "idle";
                this.view.props.parent.setState({status});
            }
        })
    }

}