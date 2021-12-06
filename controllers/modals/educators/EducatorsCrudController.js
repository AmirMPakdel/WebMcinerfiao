import EducatorsCrudModel from "../../../models/modals/educators/EducatorsCrudModel";
import EducatorsCrudModal from "../../../views/components/modal/Educators/EducatorsCrudModal";

export default class EducatorsCrudController{
    
    /**@param {EducatorsCrudModal} CreateEducatorView*/
    constructor(CreateEducatorView){

        this.view = CreateEducatorView;

        this.model = new EducatorsCrudModel();
    }

    loadEducators(){

        this.view.setState({loading:true});

        this.model.fetchEducators({}, (err, data)=>{

            if(data.result_code === env.SC.SUCCESS){

                this.view.setState({
                    loading:false,
                    list:data.data,
                })
            }
        })
    }

}