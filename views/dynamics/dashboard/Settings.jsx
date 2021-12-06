import React, { Component } from "react";
import chest from "../../../utils/chest";
import EducatorsCrudModal from "../../components/modal/Educators/EducatorsCrudModal";
import EducatorDashboardLayout from "../../layouts/EducatorDashboardLayout";
import WrapperT1 from "../../layouts/WrapperT1";
import styles from "./Settings.module.css";

/**
* Props of Settings Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class Settings extends Component {

    onEducators=()=>{
        let modal = <EducatorsCrudModal editable={true}/>
        chest.ModalLayout.controlModal(true, modal);
    }
    
    render(){
        return(
            <EducatorDashboardLayout>
                <WrapperT1>

                    <div className={styles.con}>

                        <div className={styles.setting_card+" md_card_shd amp_btn bglc1"} onClick={this.onEducators}>

                            <img className={styles.setting_card_img} src={"/svg2/educators.svg"}/>
                            <div className={styles.setting_card_t+" tilt"}>{"ویرایش دبیران"}</div>

                        </div>

                    </div>

                </WrapperT1>
            </EducatorDashboardLayout>
        )
    }
}