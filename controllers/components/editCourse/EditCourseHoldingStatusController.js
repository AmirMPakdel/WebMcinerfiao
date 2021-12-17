import EditCourseHoldingStatusModel from "../../../models/components/editCourse/EditCourseHoldingStatusModel";
import EditCourseHoldingStatus from "../../../views/components/editCourse/EditCourseHoldingStatus";

export default class EditCourseHoldingStatusController{
    
    /**@param {EditCourseHoldingStatus} view*/
    constructor(view){
        this.view = view;
        this.model = new EditCourseHoldingStatusModel();
    }
    
    
    
}