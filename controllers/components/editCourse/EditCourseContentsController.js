import EditCourseContentsModel from "../../../models/components/editCourse/EditCourseContentsModel";
import EditCourseContents from "../../../views/components/editCourse/EditCourseContents";

export default class EditCourseContentsController{
    
    /**@param {EditCourseContentsModel} view*/
    constructor(view){
        this.view = view;
        this.model = new EditCourseContents();
    }
    
    
    
}