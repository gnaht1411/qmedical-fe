import React, { useCallback, useEffect, useState } from 'react'
import { Button, Divider, message, Form, Select, Input, Space } from 'antd';
import { EyeFilled, EyeInvisibleOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import BreadCrumd from '../../../component/admin/breadcrumb/BreadCrumd';
import axiosInstance from "../../../api/axiosInstance";
import queryString from "query-string";
import createToast from './../../../component/site/toast/toast';
import toastTypes from '../../../common/constants/toast/toastTypes';
import CommonForm from '../../../component/admin/form/CommonForm';
import axios from 'axios';

const pageReq = {
    page: 0,
    pageSize: 10
}

const Search = Input.Search;

const Appointment = () => {

    const columns = [
        {
            title: 'Tên bệnh nhân',
            dataIndex: 'patientName',
            sorter: (a, b) => a.patientName.localeCompare(b.patientName),
        },
        {
            title: 'Số ĐT bệnh nhân',
            dataIndex: 'patientPhone',

        },
        {
            title: 'Thời gian',
            dataIndex: 'bookingTime',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            sorter: (a, b) => a.status.localeCompare(b.status),
        },
        {
            title: 'Ca',
            dataIndex: 'shift',
            sorter: (a, b) => a.shift.localeCompare(b.shift),
        },
        {
            title: 'Tên bác sĩ',
            dataIndex: 'doctorName',
            sorter: (a, b) => a.doctorName.localeCompare(b.doctorName),
        },
        {
            title: 'Số ĐT bác sĩ',
            dataIndex: 'doctorPhone',

        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (item) => <>
                <Button type='primary' icon={item.display === 1 ? <EyeFilled /> : <EyeInvisibleOutlined />}></Button>
            </>,
        },
    ];

    const [data, setData] = useState();
    const [item, setItem] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBookingPendingList = async () => {
            setLoading(true);
            try {
                const params = queryString.stringify(pageReq)
                const url = `booking/search?${params}`

                const res = await axiosInstance.getNoAuth(url);

                console.log(res);
                setData(res.data.data);
                console.log('end');
            } catch (err) {
                message.error(err ? err.response.data.message : err.message)
            }
            setLoading(false);
        }
        getBookingPendingList()
    }, []);

    const onOpenModal = () => {
        setOpenModal(true);
    }

    const onCloseModal = () => {
        setOpenModal(false);
        setItem({})
    }

    return (
        <Content style={{ margin: '0 16px' }}>
            <BreadCrumd title='Lịch đặt' subtitle='Danh sách' />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Space direction="horizontal" style={{ width: '100%', justifyContent: 'left' }}>
                    <Button type="primary" htmlType="submit" icon={<PlusOutlined />} onClick={onOpenModal}>
                        Thêm lịch đặt
                    </Button>
                </Space>
                <Search
                    placeholder="Search ..."
                    style={{ width: '30%', float: 'right', marginTop: '-30px' }}
                />
                <Divider />
                <Table loading={loading} columns={columns} dataSource={data} />
                {/* <CommonForm fields={columns} item={item} openModal={openModal} onCloseModal={onCloseModal} /> */}
            </div>
        </Content>
    );
}

export default Appointment;