import EditCourseDuration from "../../../views/components/editCourse/EditCourseDuration";
import EditCourseDurationModel from "../../../models/components/editCourse/EditCourseDurationModel";

export default class EditCourseDurationController{
    
    /**@param {EditCourseDuration} view*/
    constructor(view){
        this.view = view;
        this.model = new EditCourseDurationModel();
    }
    
    
    
}