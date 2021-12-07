import React, { Component } from "react";
import styles from "./EducatorsSelectModal.module.css";
import MainButton from "../global/MainButton";
import TextInput from "../global/TextInput";
import { Table, Input, Button, Space, ConfigProvider } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

/**
 * Props of EducatorsSelectModal Component
 * @typedef Props
 * @property {string} className
 * @property {"checkbox" | "radio"} 
 * @property {()=>{}} onCancel
 * @property {()=>{}} onConfirm
 * 
 * @extends {Component<Props>}
 */
export default class EducatorsSelectModal extends Component {

    state = {
        searchText: '',
        searchedColumn: '',
    }

    getColumnSearchProps = (dataIndex) => {
        return(
            {
                filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: 8 }}>
                    <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                    />
                    <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                        confirm({ closeDropdown: false });
                        this.setState({
                            searchText: selectedKeys[0],
                            searchedColumn: dataIndex,
                        });
                        }}
                    >
                        Filter
                    </Button>
                    </Space>
                </div>
                ),
                filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
                onFilter: (value, record) =>
                record[dataIndex]
                    ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                    : '',
                onFilterDropdownVisibleChange: visible => {
                if (visible) {
                    setTimeout(() => this.searchInput.select(), 100);
                }
                },
                render: text =>
                this.state.searchedColumn === dataIndex ? (
                    <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                    />
                ) : (
                    text
                ),
            }
        );
    }
    
    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
    }
    
    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    }

    onCancel = ()=>{

        this.props.onCancel && this.props.onCancel();
    }

    onConfirm = ()=>{

        this.props.onConfirm && this.props.onConfirm();
    }
    
    render(){
        const columns = [
            {
              title: 'نام خانوادگی',
              dataIndex: 'name',
              key: 'name',
              width: '35%',
              ...this.getColumnSearchProps('name'),
            },
            {
              title: 'نام',
              dataIndex: 'age',
              key: 'age',
              width: '30%',
              ...this.getColumnSearchProps('age'),
            },
            {
                title: 'تخصص',
                dataIndex: 'age',
                key: 'age',
                width: '35%',
                ...this.getColumnSearchProps('age'),
            },
        ];

        return(
            <div className={styles.con+" bglc1 btc2 xl_card_shd"}>

                <img className={styles.close_btn + " bglc1 amp_btn md_card_shd"} 
                src={"/svg/modal_close.svg"}
                onClick={this.onCancel}/>

                <div className={styles.title+" tilt "}>{"انتخاب دبیر"}</div>

                <ConfigProvider direction={"rtl"}>

                    <Table
                    scroll={{ y: "calc(80vh - 14rem)" }}
                    rowSelection={{ type: this.props.selectionType || "checkbox", ...rowSelection,}}
                    columns={columns} 
                    dataSource={data}
                    pagination={false}/>

                </ConfigProvider>

                <div className={styles.sec1}>
                    
                    <MainButton className={styles.confirm_btn}
                    title={"تایید"}
                    onClick={this.onConfirm}/>

                </div>

            </div>
        )
    }
}

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
};