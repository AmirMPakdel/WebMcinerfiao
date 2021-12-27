import React, { Component } from "react";
import styles from "./EditCourseContents.module.css";
import EditCourseContentsController from "../../../controllers/components/editCourse/EditCourseContentsController";
import EditableTitle from "../editable/EditableTitle";
import EditCourse from "../../dynamics/dashboard/EditCourse";
import MainButton from "../global/MainButton";
import Nestable from "react-nestable";
import TextInput from "../global/TextInput";

/**
* Props of EditCourseContents Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* @property {EditCourse} parent
* 
* @extends {Component<Props>}
*/
export default class EditCourseContents extends Component {
    
    constructor(props){
        super(props);

        this.controller = new EditCourseContentsController(this);
        this.state = {
        
        }
    }
    
    componentDidMount(){
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

    onAddHeading=()=>{
        this.controller.onAddHeading();
    }

    onAddHeadingContent=()=>{

    }
    
    renderNestableItem=(item)=>{

        let p = this.props.parent;
        let ps = p.state;
        let nw = ps.new_values;

        console.log(nw.contents[item.item.id - 1]);

        return (
            <CourseHeading
            parent={this}
            pparent={p}
            item={item}/>
        )
    }

    onNesableChange=({items, dragItem, targetPath})=>{

        let p = this.props.parent;
        let ps = p.state;
        let nw = ps.new_values;
        let requirements = items.map(i=>i.text);
        nw.requirements = requirements;
        p.setState({new_values: nw});
    }

    deleteNestableRow=(item)=>{

        let p = this.props.parent;
        let ps = p.state;
        let nw = ps.new_values;
        nw.requirements.splice(item.index, 1);
        p.setState({new_values: nw});
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
                title={"محتویات دوره"}
                status={st.headings}
                onEdit={this.onEdit}
                onSubmit={this.onSubmit}
                onCancel={this.onCancel}/>

                {
                    st.headings === "edit"?
                    <Nestable className={styles.heading_nestable}
                    ref={r=>this.Nestable=r}
                    items={apiHeadings2NestableItem(nw.headings)}
                    renderItem={this.renderNestableItem}
                    onChange={this.onNesableChange}
                    handler={<div className={styles.nestable_handler+" bgtc2"}/>}/>
                    :
                    <div className={styles.nestable}>
                    {
                        nw.headings.map((v,i)=>(
                            <div className={styles.nestable_card} key={i}>
                                <TextInput className={styles.nestable_inputs}
                                value={v}
                                disabled={true}
                                onChange={t=>t}/>
                            </div>
                        ))
                    }
                    </div>
                }

                {
                    st.headings === "edit" && nw.headings.length < env.LIMITS.MAX_COURSE_HEADINGS?
                    <MainButton className={styles.add_heading_btn}
                    onClick={this.onAddHeading}
                    title={"ایجاد سرفصل جدید"}/>:null
                }

            </div>
        )
    }
}

class CourseHeading extends Component{


    onHeadingInputChange=(text, item)=>{

        let p = this.props.pparent;
        let ps = p.state;
        let nw = ps.new_values;
        nw.headings[item.index] = text
        p.setState({new_values: nw});
    }

    render(){

        let nw = this.props.pparent.state.new_values;
        let p = this.props.parent;

        return(
            <div className={styles.heading_wrapper+" bdc2 "}>

                <div className={styles.heading_header}>

                    {this.props.item.handler}

                    <div>{"عنوان فصل " + (this.props.item.item.id)}</div>

                    <div className={styles.heading_delete+" bgec amp_btn"}
                    onClick={()=>p.deleteNestableRow(this.props.item)}/>

                </div>

                <TextInput className={styles.heading_input}
                value={this.props.item.item.text}
                placeholder={"عنوان فصل"}
                onChange={(t)=>this.onHeadingInputChange(t, this.props.item)}/>

                {
                    nw.contents[this.props.item.item.id - 1].length < env.LIMITS.MAX_COURSE_HEADING_CONTENTS?
                    <MainButton className={styles.add_heading_content_btn}
                    onClick={this.onAddHeadingContent}
                    title={"ایجاد محتوای جدید"}/>:null
                }

            </div>
        )
    }
}

function apiHeadings2NestableItem(sub) {

    if(!sub){
        return [];
    }

    let items = [];

    sub.forEach((e, i) => {
        items.push({id:i+1, text:e});
    });

    return items
}