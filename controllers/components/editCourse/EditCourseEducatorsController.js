import EditCourseEducators from "../../../views/components/editCourse/EditCourseEducators";
import EditCourseEducatorsModel from "../../../models/components/editCourse/EditCourseEducatorsModel"

export default class EditCourseEducatorsController{
    
    /**@param {EditCourseEducators} view*/
    constructor(view){
        this.view = view;
        this.model = new EditCourseEducatorsModel();
    }
    
    
    
}