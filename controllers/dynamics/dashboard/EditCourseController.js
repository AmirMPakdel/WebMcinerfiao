import EditCourseModel from "../../../models/dynamics/dashboard/EditCourseModel";
import { getUrlPart } from "../../../utils/helpers";
import EditCourse from "../../../views/dynamics/dashboard/EditCourse";

export default class EditCourseController{
    
    /**@param {EditCourse} view*/
    constructor(view){
        this.view = view;
        this.model = new EditCourseModel();
    }
    
    loadCourse(){

        this.view.setState({
            loading:true
        });

        let params = {
            course_id: getUrlPart(3)
        }

        this.model.getCourse(params, (err, data)=>{

            if(data.result_code === env.SC.SUCCESS){

                this.view.setState({
                    loading:false,
                    new_values: data.data,
                    old_values: data.data,
                })
            }
        })
    }
}