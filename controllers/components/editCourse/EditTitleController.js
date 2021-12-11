import EditTitleModel from "../../../models/components/editCourse/EditTitleModel";
import EditCourseTitle from "../../../views/components/editCourse/EditCourseTitle";

export default class EditTitleController{
    
    /**@param {EditCourseTitle} view*/
    constructor(view){
        this.view = view;
        this.model = new EditTitleModel();
    }
    
    
    
}