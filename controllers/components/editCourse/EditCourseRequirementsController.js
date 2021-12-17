import EditCourseRequirementsModel from "../../../models/components/editCourse/EditCourseRequirementsModel";
import EditCourseRequirements from "../../../views/components/editCourse/EditCourseRequirements";

export default class EditCourseRequirementsController{
    
    /**@param {EditCourseRequirements} view*/
    constructor(view){
        this.view = view;
        this.model = new EditCourseRequirementsModel();
    }
    
    
    
}