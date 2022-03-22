import React, {useEffect, useState} from 'react'
import {Button, Divider, message, Popconfirm, Space, Input, Table} from 'antd';
import {EditOutlined, PlusOutlined, DeleteOutlined} from '@ant-design/icons';
import Search from 'antd/lib/input/Search';
import {Content} from 'antd/lib/layout/layout';
import BreadCrumd from '../../../component/admin/breadcrumb/BreadCrumd';
import axiosInstance from "../../../api/axiosInstance";
import queryString from "query-string";
import CommonForm from "../../../component/admin/form/CommonForm";


const initParams = {
    page: 0,
    pageSize: 10,
    sortProperty: 'lastName',
    sortOrder: 'asc',
    isDeleted: null,
    gender: null,
    staffTypeId: null,
    textSearch: null
}


const initPage = {
    hasNext: false,
    hasPrevious: false,
    totalElements: 0,
    totalPages: 0
}

const Staff = () => {

    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name.localeCompare(b.name),
                multiple: 1,
            },
            hide: false
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'dob',
            key: 'dob',
            sorter: {
                compare: (a, b) => a.dob.localeCompare(b.dob),
                multiple: 1,
            },
            hide: false
        },
        {
            title: 'SDT',
            dataIndex: 'phone',
            key: 'phone',
            sorter: (a, b) => a.experience - b.experience,
            hide: false
        },
        {
            title: 'Chức vụ',
            dataIndex: 'staffTypeName',
            key: 'staffTypeName',
            hide: false
        },
        {
            title: 'Giới tính',
            dataIndex: 'gender',
            key: 'gender',
            sorter: {
                compare: (a, b) => a.gender.localeCompare(b.gender),
                multiple: 1,
            },
            hide: false
        },
        {
            title: 'Tên đăng nhập',
            dataIndex: 'username',
            key: 'username',
            hide: false
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            hide: false
        },
        {
            title: 'Vai trò',
            dataIndex: 'roleNames',
            key: 'roleNames',
            hide: false
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (item) => <div key={item.id}>
                <Button type="primary" shape="round" icon={<EditOutlined/>}></Button>
                <Divider type='vertical'/>
                <Popconfirm
                    title="Are you sure to delete ?"
                    onConfirm="{() => handleDelete(item.id)}" okText="Yes" cancelText="No"
                >
                    <Button danger shape="round" icon={<DeleteOutlined/>}></Button>,
                </Popconfirm>
            </div>,
            hide: true
        },
    ]

    const [data, setData] = useState([])
    const [params, setParams] = useState(initParams)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(initPage)
    const [openModal, setOpenModal] = useState(false);
    const [item, setItem] = useState({});

    const onOpenModal = () => {
        setOpenModal(true);
    }

    const onCloseModal = () => {
        setOpenModal(false);
        setItem({})
    }
    useEffect(() => {
        getStaffList()
    }, [params])

    const getStaffList = async () => {
        setLoading(true)
        try {
            const url = `staff/search?${queryString.stringify(params)}`;
            const resStaff = await axiosInstance.search(url)
            setData(resStaff.data)
            setPage({
                ...page,
                hasNext: resStaff.hasNext,
                hasPrevious: resStaff.hasPrevious,
                totalElements: resStaff.totalElememts,
                totalPages: resStaff.totalPages
            })
            onOpenModal();
            setLoading(false)
        } catch (e) {
            message.error(e ? e.response.data.message : e.message)

        }
    }

    const handleSubmit = () => {

    }

    const handleDelete = id => {

    }

    return (
        <>
            <Content style={{margin: '0 16px'}}>
                <BreadCrumd title='Dịch vụ' subtitle='Danh sách'/>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                    <Space direction="horizontal" style={{width: '100%', justifyContent: 'left'}}>
                        {/* <Link to="add"> */}
                        <Button type="primary" htmlType="submit" icon={<PlusOutlined/>}>
                            Thêm nhân viên
                        </Button>
                        {/* </Link> */}
                    </Space>

                    <Search
                        placeholder="Search ..."
                        style={{width: '30%', float: 'right', marginTop: '-30px'}}
                    />
                    <Divider/>

                    {data && <Table
                        columns={columns}
                        dataSource={data}
                        loading={loading}/>}
                    {/*<CommonForm*/}
                    {/*    fields={columns}*/}
                    {/*    handleSubmit={handleSubmit}*/}
                    {/*    item={item}*/}
                    {/*    openModal={openModal}*/}
                    {/*    onCloseModal={onCloseModal}/>*/}
                </div>
            </Content>
        </>
    );
}

export default Staff;