import React, { useCallback, useEffect, useState } from 'react'
import { Button, Divider, message, Form, Select } from 'antd';
import { EyeFilled, EyeInvisibleOutlined, SearchOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import BreadCrumd from '../../../component/admin/breadcrumb/BreadCrumd';

const Doctor = () => {
    const columns = [
        {
            title: 'Hình ảnh',
            dataIndex: 'img',
            render: (item) =>
                <>
                    <img style={{ width: '200px', height: 'auto' }} src={item} alt='' />
                </>
        },
        {
            title: 'Tên bác sĩ',
            dataIndex: 'lastName',
            sorter: (a, b) => a.lastName.localeCompare(b.lastName),
        },
        {
            title: 'Số năm kinh nghiệm',
            dataIndex: 'experience',
            sorter: (a, b) => {
                return a.experience > b.experience;
            }

        },
        {
            title: 'Điện thoại',
            dataIndex: 'phone',

        },
        {
            title: 'Giới tính',
            dataIndex: 'gender',
            sorter: (a, b) => a.gender.localeCompare(b.gender),
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            sorter: (a, b) => a.status.localeCompare(b.status),
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

    return (
        <Content style={{ margin: '0 16px' }}>
            <BreadCrumd title='Dịch vụ' subtitle='Danh sách' />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {/* <Space direction="horizontal" style={{ width: '100%', justifyContent: 'left' }}>
                    <Button type="primary" htmlType="submit" icon={<PlusOutlined />} onClick={onOpenModal}>
                        Thêm dịch vụ
                    </Button>
                </Space> */}
                <Divider />
                <Table columns={columns} dataSource={data} />
                {/* <CommonForm fields={columns} item={item} openModal={openModal} onCloseModal={onCloseModal} /> */}
            </div>
        </Content>
    );
}

export default Doctor;