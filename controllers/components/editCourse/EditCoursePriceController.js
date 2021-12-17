import EditCoursePriceModel from "../../../models/components/editCourse/EditCoursePriceModel";
import EditCoursePrice from "../../../views/components/editCourse/EditCoursePrice";

export default class EditCoursePriceController{
    
    /**@param {EditCoursePrice} view*/
    constructor(view){
        this.view = view;
        this.model = new EditCoursePriceModel();
    }
    
    
    
}