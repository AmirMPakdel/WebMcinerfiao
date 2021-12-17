import EditCourseSubjectsModel from "../../../models/components/editCourse/EditCourseSubjectsModel";
import EditCourseSubjects from "../../../views/components/editCourse/EditCourseSubjects";

export default class EditCourseSubjectsController{
    
    /**@param {EditCourseSubjects} view*/
    constructor(view){
        this.view = view;
        this.model = new EditCourseSubjectsModel();
    }
    
    
    
}