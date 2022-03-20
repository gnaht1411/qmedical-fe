import React, { useEffect, useState } from 'react'
import { Button, Divider, message, Popconfirm, Space, Input, Table } from 'antd';
import { EditOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import Search from 'antd/lib/input/Search';
import { Content } from 'antd/lib/layout/layout';
import BreadCrumd from '../../../component/admin/breadcrumb/BreadCrumd';

const Staff = () => {

    const data = [
        {
            key: '1',
            name: 'Nguyễn Văn Nam',
            degree: 'Thạc sĩ',
            experience: 3,
            staffTypeName: 'Doctor',
            username: 'namnv',
            email: 'namnv@gmail.com',
            roleNames: 'ROLE_DOCTOR'

        },
        {
            key: '2',
            name: 'Nguyễn Văn Đạt',
            degree: 'Thạc sĩ',
            experience: 4,
            staffTypeName: 'Doctor',
            username: 'datnv',
            email: 'datnv@gmail.com',
            roleNames: 'ROLE_DOCTOR'
        },
    ];

    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
            sorter: {
                compare: (a, b) => a.name.localeCompare(b.name),
                multiple: 1,
            },
            hide: false
        },
        {
            title: 'Trình độ',
            dataIndex: 'degree',
            sorter: {
                compare: (a, b) => a.degree.localeCompare(b.degree),
                multiple: 1,
            },
            hide: false
        },
        {
            title: 'Kinh nghiệm',
            dataIndex: 'experience',
            sorter: (a, b) => a.experience - b.experience,
            hide: false
        },
        {
            title: 'Số ĐT',
            dataIndex: 'phone',
            hide: false
        },
        {
            title: 'Loại nhân viên',
            dataIndex: 'staffTypeName',
            sorter: {
                compare: (a, b) => a.experience.localeCompare(b.experience),
                multiple: 1,
            },
            hide: false
        },
        {
            title: 'Tên đăng nhập',
            dataIndex: 'username',
            hide: false
        },
        {
            title: 'Email',
            dataIndex: 'email',
            hide: false
        },
        {
            title: 'Vai trò',
            dataIndex: 'roleNames',
            hide: false
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (item) => <div key={item.id}>
                <Button type="primary" shape="round" icon={<EditOutlined />}></Button>
                <Divider type='vertical' />
                <Popconfirm
                    title="Are you sure to delete ?"
                    onConfirm="{() => handleDelete(item.id)}" okText="Yes" cancelText="No"
                >
                    <Button danger shape="round" icon={<DeleteOutlined />}></Button>,
                </Popconfirm>
            </div>,
            hide: true
        },
    ]

    return (
        <>
            <Content style={{ margin: '0 16px' }}>
                <BreadCrumd title='Dịch vụ' subtitle='Danh sách' />
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Space direction="horizontal" style={{ width: '100%', justifyContent: 'left' }}>
                        {/* <Link to="add"> */}
                        <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                            Thêm nhân viên
                        </Button>
                        {/* </Link> */}
                    </Space>

                    <Search
                        placeholder="Search ..."
                        style={{ width: '30%', float: 'right', marginTop: '-30px' }}
                    />
                    <Divider />

                    <Table columns={columns} dataSource={data} />
                    {/* <CommonForm fields={columns} handleSubmit={handleSubmit} item={item} openModal={openModal} onCloseModal={onCloseModal} /> */}
                </div>
            </Content>
        </>
    );
}

export default Staff;