import AddContentModel from "../../../models/modals/editCourse/AddContentModel";
import AddContentModal from "../../../views/components/modal/editCourse/AddContentModal";

export default class AddContentController{
    
    /**@param {AddContentModal} view*/
    constructor(view){
        this.view = view;
        this.model = new AddContentModel();
    }
    
    
    
}