import React, { Component } from "react";
import styles from "./FilterTree.module.css";
import { Tree, Input, ConfigProvider } from 'antd';

const { Search } = Input;

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0';
    const tns = _tns || gData;

    const children = [];
    for (let i = 0; i < x; i++) {
        const key = `${preKey}-${i}`;
        tns.push({ title: key, key });
        if (i < y) {
            children.push(key);
        }
    }
    if (_level < 0) {
        return tns;
    }
    const level = _level - 1;
    children.forEach((key, index) => {
        tns[index].children = [];
        return generateData(level, key, tns[index].children);
    });
};
generateData(z);

const dataList = [];
const generateList = data => {
    for (let i = 0; i < data.length; i++) {
        const node = data[i];
        const { key } = node;
        dataList.push({ key, title: key });
        if (node.children) {
            generateList(node.children);
        }
    }
};
generateList(gData);

const getParentKey = (key, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (node.children) {
            if (node.children.some(item => item.key === key)) {
                parentKey = node.key;
            } else if (getParentKey(key, node.children)) {
                parentKey = getParentKey(key, node.children);
            }
        }
    }
    return parentKey;
};


export default class FilterTree extends Component {

    state = {
        expandedKeys: ["javascript"],
        searchValue: '',
        autoExpandParent: true,
    };

    onExpand = expandedKeys => {
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    };

    onChange = e => {
        const { value } = e.target;
        const expandedKeys = dataList
            .map(item => {
                if (item.title.indexOf(value) > -1) {
                    return getParentKey(item.key, gData);
                }
                return null;
            })
            .filter((item, i, self) => item && self.indexOf(item) === i);
        this.setState({
            expandedKeys,
            searchValue: value,
            autoExpandParent: true,
        });
    };

    render() {
        
        return (
            <ConfigProvider direction={"rtl"}>
            <div>
                <Tree
                    onExpand={this.onExpand}
                    expandedKeys={this.state.expandedKeys}
                    autoExpandParent={this.state.autoExpandParent}
                    treeData={[
                        {
                            key:"develope", title:"توسعه", 
                                children:[
                                    { 
                                        key:"web-develope", title:"توسعه وب",
                                            children:[
                                                {key:"javascript", title:"جاوا اسکریپت"},
                                                {key:"react", title:"ری اکت"},
                                                {key:"css", title:"سی اس اس"},
                                                {key:"angular", title:"انگولار"},
                                                {key:"php", title:"پی اچ پی"}
                                            ],
                                    }
                                ]
                        },
                        {
                            key:"art", title:"هنر",
                                children:[
                                    {key:"sculpturing", title:"مجسمه سازی"},
                                    {key:"painting", title:"نقاشی"}
                                ]
                        }
                    ]}
                />
            </div>
            </ConfigProvider>
        );
    }
}
