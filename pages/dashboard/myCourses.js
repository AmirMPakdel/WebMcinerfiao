import React, { Component } from "react";
import dynamic from 'next/dynamic'

const MyCourses = dynamic(() => import("../../dynamics/dashboard/MyCourses"), { ssr: false });

export default class myCourses extends Component {

  componentDidMount(){
    
  }
  
  render(){
    return(
      <MyCourses/>
    )
  }
}