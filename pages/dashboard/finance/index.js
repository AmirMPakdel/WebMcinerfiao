import React, { Component } from "react";
import dynamic from 'next/dynamic'

const Finance = dynamic(() => import("../../views/dynamics/dashboard/Finance"), { ssr: false });

export default class index extends Component {

  
  render(){
    return(
      <Finance/>
    )
  }
}