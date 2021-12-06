import EducatorsCrudModel from "../../models/modals/EducatorsCrudModel";
import EducatorsCrudModal from "../../views/components/modal/EducatorsCrudModal";

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