import React, { useEffect, useState } from 'react'
import { Button, Divider, message, Popconfirm, Space, Input } from 'antd';
import { EditOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import BreadCrumd from '../../../component/admin/breadcrumb/BreadCrumd';
import CommonForm from '../../../component/admin/form/CommonForm';
import axiosInstance from '../../../api/axiosInstance';
import toastTypes from '../../../common/constants/toast/toastTypes';
import createToast from '../../../component/site/toast/toast';


const Search = Input.Search;


const Services = () => {

    const columns = [
        {
            title: 'Tên dịch vụ',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name.localeCompare(b.name),
                multiple: 1,
            },
            hide: false
        },
        {
            title: 'Giá dịch vụ',
            dataIndex: 'price',
            key: 'price',
            sorter: (a, b) => {
                return a.price > b.price
            },
            hide: false
        },
        {
            title: 'Đơn vị',
            dataIndex: 'unit',
            key: 'unit',
            sorter: {
                compare: (a, b) => a.unit - b.unit,
                multiple: 1,
            },
            hide: false
        },
        {
            title: 'Mô tả',
            dataIndex: 'des',
            key: 'des',
            sorter: {
                compare: (a, b) => a.des - b.des,
                multiple: 1,
            },
            hide: false
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (item, record) => <div key={record.id}>

                <Button type="primary" onClick={() => handleFetchItem(record.id)} shape="round" icon={<EditOutlined />}></Button>
                <Divider type='vertical' />
                <Popconfirm
                    title="Are you sure to delete ?"
                    onConfirm={() => handleDelete(record.id)} okText="Yes" cancelText="No"

                >
                    <Button danger shape="round" icon={<DeleteOutlined />}></Button>,
                </Popconfirm>
            </div>,
            hide: true
        },
    ];

    const [data, setData] = useState([]);
    const [item, setItem] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(true);

    const onOpenModal = () => {
        setOpenModal(true);
    }

    const onCloseModal = () => {
        setOpenModal(false);
        setItem({})
    }

    useEffect(() => {
        console.log("GET SERVICE")
        getServices();
    }, []);

    const getServices = async () => {
        setLoading(true);
        try {
            const resServices = await axiosInstance.getNoAuth("service/no-page")
            setData(resServices.data);
        } catch (e) {
            createToast(toastTypes.ERROR, `Error !!!!`)
        }
        setLoading(false);
    }



    const handleFetchItem = async (id) => {
        setLoading(true);
        try {
            const res = await axiosInstance.search(`/service/${id}`);
            console.log('res fetchItem :', res);
            setItem(res.data);
            console.log('item :', res.data.id);
            onOpenModal();
            setLoading(false);
        } catch (err) {
            message.error(err.response.data.message)
            console.log(err);
        }
    };


    const handleDelete = async (id) => {
        setLoading(true);
        try {
            const res = await axiosInstance.deleteService(`/service/${id}`);
            getServices();
            message.success('Delete successfully');
            setLoading(false);
        } catch (err) {
            message.error('Delete failed: ' + err.message);
            console.log(err);
        }
    }

    const handleSubmit = async (item) => {
        if (item?.id) {
            try {
                console.log('edit : ', item.id);
                const res = await axiosInstance.putService(`/service`);
                console.log('res Edit :', res);
                getServices();
                message.success('Update successfully')
                onCloseModal();
            } catch (err) {
                message.error('Update failed: ' + err.message)
                console.log(err);
            }
        } else {
            try {
                const res = await axiosInstance.postService(`/service`);
                console.log('res Add :', res);
                getServices();
                message.success(res.data.message)
                onCloseModal();
            } catch (err) {
                message.error('Save failed: ' + err.message)
                console.log(err);
            }
        }
    };


    return (
        <Content style={{ margin: '0 16px' }}>
            <BreadCrumd title='Dịch vụ' subtitle='Danh sách' />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Space direction="horizontal" style={{ width: '100%', justifyContent: 'left' }}>
                    <Button type="primary" htmlType="submit" icon={<PlusOutlined />} onClick={onOpenModal}>
                        Thêm dịch vụ
                    </Button>
                </Space>

                <Search
                    placeholder="Search ..."
                    style={{ width: '30%', float: 'right', marginTop: '-30px' }}
                />
                <Divider />

                <Table loading={loading} columns={columns} dataSource={data} />
                <CommonForm fields={columns} handleSubmit={handleSubmit} item={item} openModal={openModal} onCloseModal={onCloseModal} />
            </div>
        </Content>
    );
}

export default Services;