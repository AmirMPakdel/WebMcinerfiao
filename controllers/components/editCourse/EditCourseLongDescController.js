import EditCourseLongDescModel from "../../../models/components/editCourse/EditCourseLongDescModel";
import EditCourseLongDesc from "../../../views/components/editCourse/EditCourseLongDesc";

export default class EditCourseLongDescController{
    
    /**@param {EditCourseLongDesc} view*/
    constructor(view){
        this.view = view;
        this.model = new EditCourseLongDescModel();
    }
    
    
    
}