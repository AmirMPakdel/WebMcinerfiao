import EditCourseSubjectsModel from "../../../models/components/editCourse/EditCourseSubjectsModel";
import EditCourseSubjects from "../../../views/components/editCourse/EditCourseSubjects";

export default class EditCourseSubjectsController{
    
    /**@param {EditCourseSubjects} view*/
    constructor(view){
        this.view = view;
        this.model = new EditCourseSubjectsModel();
    }
    
    onEdit(){
        let status = this.view.props.parent.state.status;
        status.subjects = "edit";
        this.view.props.parent.setState(status);
    }

    onAddSubject=()=>{

        let newVal = this.view.props.parent.state.new_values;

        if(!newVal.subjects){
            newVal.subjects = [];
        }

        newVal.subjects.push("");
        
        this.view.props.parent.setState(newVal)
    }
    
    onSubmit(){

        let p = this.view.props.parent;
        let ps = p.state;
        let status = ps.status;
        
        if(ps.new_values.subjects === ps.old_values.subjects){

            status.subjects = "idle";
            p.setState({status});

        }else{
            
            status.subjects = "loading";
            p.setState({status});

            let params = {
                course_id : getUrlPart(3),
                subjects: ps.new_values.subjects,
            }

            this.model.save(params, (err, data)=>{

                if(data.result_code === env.SC.SUCCESS){

                    chest.openNotification("قیمت دوره با موفقیت ویرایش شد.", "success");
                    
                    status.subjects = "idle";
                    let old_values = ps.old_values;
                    old_values.subjects = params.subjects;
                    p.setState({status, old_values});
                }

            });
        }
    }

    onCancel(){

        let p = this.view.props.parent;
        let ps = p.state;
        let status = ps.status;
        status.subjects = "idle";
        p.setState({status});
    }

    onChange(t){

        let newVal = this.view.props.parent.state.new_values;

        newVal.subjects = t;

        this.view.props.parent.setState(newVal)
    }
    
}