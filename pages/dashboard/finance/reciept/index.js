import React, { Component } from "react";
import dynamic from 'next/dynamic'

const Finance = dynamic(() => import("../../../dynamics/dashboard/re"), { ssr: false });

export default class index extends Component {

  
  render(){
    return(
      <Finance/>
    )
  }
}