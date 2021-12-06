import FileUploadModel from "../../models/components/FileUploadModel";
import FileUpload from "../../views/components/global/FileUpload";

export default class FileUploadController{

    /**
     * @param {FileUpload} view 
     */
    constructor(view){

        this.view = view;
        this. model = new FileUploadModel();
    }

    upload(){

        let vs = this.view.state;

        let params={
            file_size: vs.file
        }

        this.model.createUploadKey()
    }
}