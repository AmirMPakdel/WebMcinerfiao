import React, { Component } from "react";
import dynamic from 'next/dynamic'

const Search = dynamic(() => import("../../views/dynamics/index/Search"), { ssr: false });

export default class index extends Component {

  componentDidMount(){
    
  }
  
  render(){
    return(
      <Search/>
    )
  }
}