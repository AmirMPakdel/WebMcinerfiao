import React, { Component } from "react";
import dynamic from 'next/dynamic'

const Index = dynamic(() => import("../dynamics/index/Index"), { ssr: false });

export default class index extends Component {

  componentDidMount(){
    
  }
  
  render(){
    return(
      <Index/>
    )
  }
}