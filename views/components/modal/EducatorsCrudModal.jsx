import React, { Component } from "react";
import styles from "./EducatorsCrudModal.module.css";
import MainButton from "../global/MainButton";
import TextInput from "../global/TextInput";
import { Table, Input, Button, Space, ConfigProvider } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import CreateEducatorModal from "./CreateEducatorModal";
import chest from "../../../utils/chest";
import Loading from "../global/Loading";
import EducatorsCrudController from "../../../controllers/modals/EducatorsCrudController";

/**
 * Props of EducatorsCrudModal Component
 * @typedef Props
 * @property {string} className
 * @property {boolean} selectable
 * @property {boolean} editable
 * @property {"checkbox" | "radio"} selectionType
 * @property {()=>{}} onCancel
 * @property {()=>{}} onConfirm
 * 
 * @extends {Component<Props>}
 */
export default class EducatorsCrudModal extends Component {

    constructor(props){
        super(props);

        this.controller = new EducatorsCrudController(this);

        this.state = {
            loading:true,
            list:[],
            searchText: '',
            searchedColumn: '',
        }
    }

    componentDidMount(){
        this.controller.loadEducators();
    }

    onCreate=()=>{
        let modal = <CreateEducatorModal/>
        chest.ModalLayout.controlModal(true, modal);
    }

    onEdit=(record)=>{

    }

    onDelete=(record)=>{
        
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

        if(this.props.onCancel){
            this.props.onCancel();
        }else{
            chest.ModalLayout.controlModal(false);
        }
    }

    onConfirm = ()=>{

        this.props.onConfirm && this.props.onConfirm();
    }
    
    render(){
        const columns = [
            {
              title: 'نام خانوادگی',
              dataIndex: 'last_name',
              key: 'last_name',
              width: '35%',
              ...this.getColumnSearchProps('last_name'),
            },
            {
              title: 'نام',
              dataIndex: 'first_name',
              key: 'first_name',
              width: '30%',
              ...this.getColumnSearchProps('first_name'),
            },
            {
                title: 'عملیات',
                key: 'action',
                render: (text, record) => (
                  <Space size="middle">
                    <a onClick={()=>this.onEdit(record)}>ویرایش</a>
                    &emsp;
                    <a onClick={()=>this.onDelete(record)}>حذف</a>
                  </Space>
                ),
            },
            
        ];

        return(
            <div className={styles.con+" bglc1 btc2 xl_card_shd"}>

                <img className={styles.close_btn + " bglc1 amp_btn md_card_shd"} 
                src={"/svg/modal_close.svg"}
                onClick={this.onCancel}/>

                {
                    this.state.loading?
                    <Loading/>:null
                }

                {
                    !this.state.loading?
                    <>

                        <div className={styles.title+" tilt "}>
                            {
                                this.props.selectable?
                                "انتخاب دبیر":
                                "دبیران"
                            }

                            <MainButton className={styles.add_edu_btn}
                            title="ایجاد دبیر"
                            onClick={this.onCreate}/>

                        </div>

                        <ConfigProvider direction={"rtl"}>

                            <Table
                            scroll={{ y: "calc(80vh - 14rem)" }}
                            rowSelection={this.props.selectable?{ type: this.props.selectionType || "checkbox", ...rowSelection}:false}
                            columns={columns} 
                            dataSource={this.state.list}
                            pagination={false}/>

                        </ConfigProvider>

                        <div className={styles.sec1}>
                            
                            <MainButton className={styles.confirm_btn}
                            title={"تایید"}
                            onClick={this.onConfirm}/>

                        </div>

                    </>:null
                }
                
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

const data = [
    // {
    //   key: '1',
    //   name: 'اکبر نژادیان',
    //   age: " محمد رضا",
    //   address: 'New York No. 1 Lake Park',
    // },
    // {
    //   key: '2',
    //   name: 'Joe Black',
    //   age: 42,
    //   address: 'London No. 1 Lake Park',
    // },
    // {
    //   key: '3',
    //   name: 'Jim Green',
    //   age: 32,
    //   address: 'Sidney No. 1 Lake Park',
    // },
    // {
    //   key: '4',
    //   name: 'Jim Red',
    //   age: 32,
    //   address: 'London No. 2 Lake Park',
    // },
    // {
    //     key: '5',
    //     name: 'Jim Red',
    //     age: 32,
    //     address: 'London No. 2 Lake Park',
    // },
    // {
    //     key: '6',
    //     name: 'Jim Red',
    //     age: 32,
    //     address: 'London No. 2 Lake Park',
    // },
    // {
    //     key: '7',
    //     name: 'Jim Red',
    //     age: 32,
    //     address: 'London No. 2 Lake Park',
    // },
    // {
    //     key: '8',
    //     name: 'Jim Red',
    //     age: 32,
    //     address: 'London No. 2 Lake Park',
    // },
    // {
    //     key: '9',
    //     name: 'Jim Red',
    //     age: 32,
    //     address: 'London No. 2 Lake Park',
    // },
    // {
    //     key: '10',
    //     name: 'Jim Red',
    //     age: 32,
    //     address: 'London No. 2 Lake Park',
    // },
    // {
    //     key: '11',
    //     name: 'Jim Red',
    //     age: 32,
    //     address: 'London No. 2 Lake Park',
    // },
];