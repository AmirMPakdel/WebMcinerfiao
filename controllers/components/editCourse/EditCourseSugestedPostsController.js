import EditCourseSuggestedPosts from "../../../models/components/editCourse/EditCourseSuggestedPosts";
import EditCourseDuration from "../../../views/components/editCourse/EditCourseSuggestedPosts";

export default class EditCourseSugestedPostsController{
    
    /**@param {EditCourseSuggestedPosts} view*/
    constructor(view){
        this.view = view;
        this.model = new EditCourseSuggestedPosts();
    }
    
    
    
}