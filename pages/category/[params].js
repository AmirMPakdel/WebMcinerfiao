import React, { Component } from "react";
import dynamic from 'next/dynamic'

const Category = dynamic(() => import("../../dynamics/index/Category"), { ssr: false });

export default class index extends Component {

  componentDidMount(){
    
  }
  
  render(){
    return(
      <Category/>
    )
  }
}