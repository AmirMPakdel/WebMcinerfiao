import React, { Component } from "react";
import styles from "./EditCourseSubjects.module.css";
import EditCourseSubjectsController from "../../../controllers/components/editCourse/EditCourseSubjectsController";
import EditableTitle from "../editable/EditableTitle";
import MainButton from "../global/MainButton";
import Nestable from "react-nestable";
import EditCourse from "../../dynamics/dashboard/EditCourse";
import TextInput from "../global/TextInput";

/**
* Props of EditCourseSubjects Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* @property {EditCourse} parent 
* 
* @extends {Component<Props>}
*/
export default class EditCourseSubjects extends Component {
    
    constructor(props){
        super(props);
        this.controller = new EditCourseSubjectsController(this);
        this.state = {
        
        }
    }
    
    componentDidMount(){
    }
    
    onEdit=()=>{
        this.controller.onEdit()
    }

    onSubmit=()=>{        
        this.controller.onSubmit();
    }

    onCancel=()=>{
        this.controller.onCancel();
    }
    
    onChange=(t)=>{
        this.controller.onChange(t);
    }

    onAddSubject=()=>{
        this.controller.onAddSubject();
    }

    renderNestableItem=(item)=>{

        return (
            <div className={styles.nestable_card}>
                {item.handler}
                <TextInput className={styles.nestable_inputs}
                value={item.text}
                onChange={(t)=>this.onNestableInputChange(t, item)}/>
            </div>
            
        )
    }

    onNestableInputChange=(text, obj)=>{
        let p = this.props.parent;
        let ps = p.state;
        let nw = ps.new_values;

        let item = obj.item;

        nw.subjects[item.id-1] = text

        p.setState({new_values: nw});
    }

    onNesableChange=({items, dragItem, targetPath})=>{

        let p = this.props.parent;
        let ps = p.state;
        let nw = ps.new_values;

        let temp = nw.subjects[targetPath[0]];
        nw.subjects[targetPath[0]] = nw.subjects[dragItem.id-1];
        nw.subjects[dragItem.id-1] = temp;

        const subjects = nw.subjects.map(l => Object.assign("", l));

        p.setState({new_values: nw});

        console.log(nw.subjects);
    }

    render(){
        let p = this.props.parent;
        let ps = p.state;
        let st = ps.status;
        let od = ps.old_values;
        let nw = ps.new_values;

        return(
            <div className={styles.con}>

                <EditableTitle
                title={"مواردی که در این دوره آموزش داده خواهد شد"}
                status={st.subjects}
                onEdit={this.onEdit}
                onSubmit={this.onSubmit}
                onCancel={this.onCancel}/>
                
                <Nestable className={styles.nestable}
                items={apiSubjects2NestableItem(nw.subjects)}
                renderItem={this.renderNestableItem}
                onChange={this.onNesableChange}
                handler={<div className={styles.nestable_handler+" bgtc2"}/>}/>

                {
                    st.subjects === "edit"?
                    <MainButton className={styles.add_sub_btn}
                    onClick={this.onAddSubject}
                    title={"ایجاد مورد جدید"}/>:null
                }

            </div>
        )
    }
}

function apiSubjects2NestableItem(sub) {

    if(!sub){
        return [];
    }

    let items = [];

    sub.forEach((e, i) => {
        items.push({id:i+1, text:e});
    });

    return items
}