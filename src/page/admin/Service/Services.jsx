import React, { useEffect, useState } from 'react'
import { Button, Divider, message, Space } from 'antd';
import { EditOutlined, PlusOutlined, EyeFilled } from '@ant-design/icons';
import { Table } from 'antd';
import axios from 'axios';
import { Content } from 'antd/lib/layout/layout';
import BreadCrumd from '../../../component/admin/breadcrumb/BreadCrumd';
import CommonForm from '../../../component/admin/form/CommonForm';
import axiosInstance from '../../../api/axiosInstance';
import toastTypes from '../../../common/constants/toast/toastTypes';
import createToast from '../../../component/site/toast/toast';

const Services = () => {

    const columns = [
        {
            title: 'Tên dịch vụ',
            dataIndex: 'name',
            sorter: {
                compare: (a, b) => a.name.localeCompare(b.name),
                multiple: 1,
            },
            hide: false
        },
        {
            title: 'Giá dịch vụ',
            dataIndex: 'price',
            sorter: (a, b) => {
                return a.price > b.price
            },
            hide: true
        },
        {
            title: 'Đơn vị',
            dataIndex: 'unit',
            sorter: {
                compare: (a, b) => a.unit - b.unit,
                multiple: 1,
            },
            hide: true
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (item) => <div key={item.id}>
                <Button danger shape="round" icon={<EyeFilled />}></Button>,
                <Divider type='vertical' />
                <Button type="primary" shape="round" icon={<EditOutlined />}></Button>
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

        const getServices = async () => {
            setLoading(true);
            try {
                const resServices = await axiosInstance.getNoAuth("service/no-page")
                setData(resServices.data)
            } catch (e) {
                createToast(toastTypes.ERROR, `Error !!!!`)
            }
            setLoading(false);
        }
        getServices();
    }, []);



    return (
        <Content style={{ margin: '0 16px' }}>
            <BreadCrumd title='Dịch vụ' subtitle='Danh sách' />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Space direction="horizontal" style={{ width: '100%', justifyContent: 'left' }}>
                    <Button type="primary" htmlType="submit" icon={<PlusOutlined />} onClick={onOpenModal}>
                        Thêm dịch vụ
                    </Button>
                </Space>
                <Divider />
                <Table loading={loading} columns={columns} dataSource={data} />
                <CommonForm fields={columns} item={item} openModal={openModal} onCloseModal={onCloseModal} />
            </div>
        </Content>
    );
}

export default Services;