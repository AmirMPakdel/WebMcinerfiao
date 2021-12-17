import EditCourseShortDescModel from "../../../models/components/editCourse/EditCourseShortDescModel";
import EditCourseShortDesc from "../../../views/components/editCourse/EditCourseShortDesc";

export default class EditCourseShortDescController{
    
    /**@param {EditCourseShortDesc} view*/
    constructor(view){
        this.view = view;
        this.model = new EditCourseShortDescModel();
    }
    
    
    
}