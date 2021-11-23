import React, { Component } from "react";
import dynamic from 'next/dynamic'

const IncreaseCredit = dynamic(() => import("../../views/dynamics/dashboard/IncreaseCredit"), { ssr: false });

export default class index extends Component {

  
  render(){
    return(
      <IncreaseCredit/>
    )
  }
}