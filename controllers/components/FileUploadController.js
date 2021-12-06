import FileUploadModel from "../../models/components/FileUploadModel";
import chest from "../../utils/chest";
import FileUpload from "../../views/components/global/FileUpload";

export default class FileUploadController{

    /**
     * @param {FileUpload} view 
     */
    constructor(view){

        this.view = view;
        this. model = new FileUploadModel();
    }

    onFile(event){

        let maxSize = (this.view.props.maxSize?this.view.props.maxSize:1);
        let file = event.target.files[0];
        if(!file) return;

        if(file.size < ((maxSize)*1024*1024)){
            
            this.setState(this.state);

        }else{
            
            chest.openNotification("اندازه فایل نباید بیشتر از "+maxSize+" مگابایت باشد.", "error");
        }
    }

    upload(){

        let vs = this.view.state;

        let params={
            file_size: vs.file
        }

        this.model.createUploadKey()
    }
}