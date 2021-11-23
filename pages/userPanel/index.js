import React, { Component } from "react";
import dynamic from 'next/dynamic'

const UserPanel = dynamic(() => import("../../views/dynamics/userPanel/UserPanel"), { ssr: false });

export default class index extends Component {

  componentDidMount(){
    
  }
  
  render(){
    return(
      <UserPanel/>
    )
  }
}