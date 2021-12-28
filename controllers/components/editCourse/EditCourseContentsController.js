import EditCourseContentsModel from "../../../models/components/editCourse/EditCourseContentsModel";
import chest from "../../../utils/chest";
import EditCourseContents from "../../../views/components/editCourse/EditCourseContents";
import NewHeadingModal from "../../../views/components/modal/editCourse/NewHeadingModal";

export default class EditCourseContentsController{
    
    /**@param {EditCourseContents} view*/
    constructor(view){
        this.view = view;
        this.model = new EditCourseContentsModel();
    }
    
    onEdit(){
        let status = this.view.props.parent.state.status;
        status.headings = "edit";
        this.view.props.parent.setState(status);
    }

    onAddHeading=()=>{

        let modal = <NewHeadingModal/>;

        chest.ModalLayout.setModal(1, modal, ()=>{
            chest.ModalLayout.visibleToggle(1, true);
        })

        // let newVal = this.view.props.parent.state.new_values;

        // if(!newVal.headings){
        //     newVal.headings = [];
        // }

        // newVal.headings.push("");

        // newVal.contents[newVal.headings.length-1] = [{id:"new", title:""}]
        
        // this.view.props.parent.setState(newVal)
    }
    
    onSubmit(){

        let p = this.view.props.parent;
        let ps = p.state;
        let status = ps.status;

        
        //validate the headings
        ps.new_values.headings = ps.new_values.headings.filter((v,i)=>{
            if(v && v != " " && v != "0" && isNaN(Number(v))){
                return v;
            }
        });
        
        if(_.isEqual(ps.new_values.headings, ps.old_values.headings)){

            status.headings = "idle";
            p.setState({status});

        }else{
            
            status.headings = "loading";
            p.setState({status});

            let params = {
                course_id : getUrlPart(3),
                headings: ps.new_values.headings,
            }

            this.model.save(params, (err, data)=>{

                if(data.result_code === env.SC.SUCCESS){

                    chest.openNotification("موارد آموزشی این دوره با موفقیت ویرایش شد.", "success");
                    
                    status.headings = "idle";
                    let old_values = ps.old_values;
                    old_values.headings = params.headings.map(e=>e);
                    p.setState({status, old_values});
                }
            });
        }
    }

    onCancel(){

        let p = this.view.props.parent;

        let ps = p.state;

        ps.status.headings = "idle";

        ps.new_values.headings = ps.old_values.headings.map(e=>e);

        p.setState(ps);
    }
    
}