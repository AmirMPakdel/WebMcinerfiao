import React, { Component } from "react";
import styles from "./EditCourseSuggestedPosts.module.css";
import EditCourseSuggestedPostsController from "../../../controllers/components/editCourse/EditCourseSuggestedPostsController";

/**
* Props of EditCourseSuggestedPosts Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class EditCourseSuggestedPosts extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseSuggestedPostsController(this);
        this.state = {
        
        }
    }
    
    componentDidMount(){
    }
    
    render(){
        return(
            <div>
                
            </div>
        )
    }
}