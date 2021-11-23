import MyCoursesModel from "../../models/dashboard/myCoursesModel";
import MyCourses from "../../views/dynamics/dashboard/MyCourses";

export default class MyCoursesController{
    
    /**@param {MyCourses} myCorusesView*/
    constructor(myCorusesView){

        this.view = myCorusesView;

        this.model = new MyCoursesModel();
    }

    async loadMyCourses(){

        let myCourseList = await this.model.getMyCourses();

        this.view.setState({
            loading:false,
            myCourseList,
        });
    }
    
}