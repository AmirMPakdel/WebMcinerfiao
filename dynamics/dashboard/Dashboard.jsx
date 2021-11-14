import React, { Component } from "react";
import DashboardCard from "../../components/card/DashboardCard";
import IncomeChart from "../../components/chart/IncomeChart";
import IncomesChestCard from "../../components/card/IncomesChestCard";
import EducatorDashboardLayout from "../../layouts/EducatorDashboardLayout";
import styles from "./Dashboard.module.css";
import WrapperT1 from "../../layouts/WrapperT1";

export default class Dashboard extends Component {
    
    render(){
        return(
            <EducatorDashboardLayout>

                <WrapperT1>

                    <div className={styles.con}>
                    
                        <div className={styles.sec1}>

                            <DashboardCard className={styles.dash_card}
                            number={"32,605"} number_title={"عدد"} title={"دوره فروخته شده"}/>

                            <DashboardCard  className={styles.dash_card} 
                            number={"15"} number_title={"عدد"} title={"دوره ارائه شده"}/>

                            <DashboardCard  className={styles.dash_card} 
                            number={"15,325"} number_title={"تومان"} title={"هزینه روزانه"}/>

                            <DashboardCard  className={styles.dash_card} 
                            number={"165"} number_title={"روز"} title={"باقی مانده تا اتمام اعتبار"}/>

                        </div>

                        <div className={styles.sec2}>

                            <IncomesChestCard/>

                            <IncomeChart/>

                        </div>

                    </div>

                </WrapperT1>

            </EducatorDashboardLayout>
        )
    }
}