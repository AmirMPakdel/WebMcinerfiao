import EditCourseBackgrundModel from "../../../models/components/editCourse/EditCourseBackgrundModel";
import EditCourseBackgrund from "../../../views/components/editCourse/EditCourseBackgrund";

export default class EditCourseBackgrundController{
    
    /**@param {EditCourseBackgrund} view*/
    constructor(view){
        this.view = view;
        this.model = new EditCourseBackgrundModel();
    }
    
    
    
}