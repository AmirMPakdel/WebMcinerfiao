import React, { Component } from "react";
import styles from "./EditCourseContents.module.css";
import EditCourseContentsController from "../../../controllers/components/editCourse/EditCourseContentsController";
import EditableTitle from "../editable/EditableTitle";
import EditCourse from "../../dynamics/dashboard/EditCourse";
import MainButton from "../global/MainButton";
import Nestable from "react-nestable";
import TextInput from "../global/TextInput";
import {sortableContainer, sortableElement} from 'react-sortable-hoc';

import { Container, Draggable } from "react-smooth-dnd";
import TestCards from "./TestCards";

const SortableItem = sortableElement(({value}) => <li>{value}</li>);

const SortableContainer = sortableContainer(({children}) => {
  return <div>{children}</div>;
});

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

    onUpdateHeading=(heading_obj)=>{
        this.controller.onUpdateHeading(heading_obj);
    }

    onDeleteHeading=(heading_obj)=>{
        this.controller.onDeleteHeading(heading_obj);
    }

    onAddHeadingContent=(heading_obj)=>{
        this.controller.onAddHeadingContent(heading_obj);
    }

    getCardPayload=(columnId, index)=>{
        let p = this.props.parent;
        let ps = p.state;
        let nw = ps.new_values;
        return nw.content_hierarchy.children.filter(p => p.id === columnId)[0].children[
          index
        ];
    }

    onColumnDrop=(dropResult)=>{
        let p = this.props.parent;
        let ps = p.state;
        let nw = ps.new_values;

        const new_ch = Object.assign({}, nw.content_hierarchy);
        new_ch.children = applyDrag(new_ch.children, dropResult);

        ps.new_values.content_hierarchy = new_ch;
        p.setState(ps);
    }

    onCardDrop=(columnId, dropResult)=>{

        let p = this.props.parent;
        let ps = p.state;
        let nw = ps.new_values;

        if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {

            const new_ch = Object.assign({}, nw.content_hierarchy);
            const column = new_ch.children.filter(p => p.id === columnId)[0];
            const columnIndex = new_ch.children.indexOf(column);
    
            const newColumn = Object.assign({}, column);
            newColumn.children = applyDrag(newColumn.children, dropResult);
            new_ch.children.splice(columnIndex, 1, newColumn);
    
            ps.new_values.content_hierarchy = new_ch;
            p.setState(ps);
        }
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
                status={st.content_hierarchy}
                onEdit={this.onEdit}
                onSubmit={this.onSubmit}
                onCancel={this.onCancel}/>

                <div className={styles.hierarchy_con}>
                    <Container
                    dragHandleSelector={st.content_hierarchy == "edit"?undefined:"null"}
                    onDrop={this.onColumnDrop}
                    dropPlaceholder={{                      
                        animationDuration: 150,
                        showOnTop: true,
                        className: styles.heading_card_preview+" btc2 bgtc1"
                    }}>
                    {nw.content_hierarchy.children.map(item => {
                        return (
                        <Draggable key={item.id}> 

                            <div className={styles.heading_drag_wrapper+" bdc2i bglc1"}>

                                <div className={styles.heading_title_bar}>
                                    {
                                        st.content_hierarchy == "edit"?
                                        <>
                                        <span className={styles.heading_drag_handle+" ftc2"}>&#x2630;</span>
                                        <div className={styles.heading_text+" tilt"}>{item.title}</div>
                                        <div className={styles.heading_edit+" amp_btn bgtc1"}
                                        onClick={()=>this.onUpdateHeading(item)}/>
                                        <div className={styles.heading_delete+" amp_btn bgec"}
                                        onClick={()=>this.onDeleteHeading(item)}/>
                                        </>
                                        :
                                        <div className={styles.heading_text+" tilt"}>{item.title}</div>
                                    }
                                </div>

                                <Container
                                dragHandleSelector={st.content_hierarchy == "edit"?undefined:"null"}
                                groupName="content_group"
                                onDrop={e => this.onCardDrop(item.id, e)}
                                getChildPayload={index =>this.getCardPayload(item.id, index)}
                                dropPlaceholder={{                      
                                    animationDuration: 150,
                                    showOnTop: true,
                                    className: styles.content_card_preview+" btc2 bgtc1"
                                }}>
                                {
                                item.children.map(sub=>{

                                    return(
                                        <Draggable key={sub.id}>

                                            <div className={styles.content_drag_bar+" bglc2"}>
                                                {
                                                    st.content_hierarchy == "edit"?
                                                    <>
                                                    <span className={styles.content_drag_handle+" ftc2"}>&#x2630;</span>
                                                    <div className={styles.content_edit+" amp_btn bgtc1"}/>
                                                    <div className={styles.content_delete+" amp_btn bgec"}/>
                                                    </>
                                                    :null
                                                }
                                                <div className={styles.content_text+" bdy"}>{sub.title}</div>
                                            </div>

                                        </Draggable>
                                    )
                                })
                                }
                                </Container>
                                {
                                    st.content_hierarchy == "edit"?
                                    <MainButton className={styles.new_content_btn}
                                    onClick={()=>this.onAddHeadingContent(item)}
                                    title="اضافه کردن محتوا"/>
                                    :null
                                }
                            </div>

                        </Draggable>
                        );
                    })}
                    </Container>
                </div>
                {
                    st.content_hierarchy == "edit" && nw.headings.length < env.LIMITS.MAX_COURSE_HEADINGS?
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

function apiHierarchy2NestableItem(sub) {

    // if(!sub){
    //     return [];
    // }

    let items = [];

    // sub.forEach((e, i) => {
    //     items.push({id:i+1, text:e});
    // });

    // items = [
    //     {h_id:1, content_ids:[1,2,3]},
    //     {h_id:2, content_ids:[4,5]},
    // ]

    items = [
        {
            id: 24,
            text: "مقدمه",
            type:"heading",
            children:[
                {id: 12, text: "جلسه اول", type:"content"},
                {id: 56, text: "جلسه دوم", type:"content"},
            ]
        },
        {
            id: 28,
            text: "فصل 1",
            type:"heading",
            children:[
                {id: 174, text: "جلسه سوم", type:"content"},
                {id: 256, text: "جلسه چهارم", type:"content"},
            ]
        },
    ]

    return items
}

const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;
  
    const result = [...arr];
    let itemToAdd = payload;
  
    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0];
    }
  
    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd);
    }
  
    return result;
};