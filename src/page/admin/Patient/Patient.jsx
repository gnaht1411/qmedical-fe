import React, { useCallback, useEffect, useState } from 'react'
import { Button, Divider, message, Form, Select } from 'antd';
import { EyeFilled, EyeInvisibleOutlined, SearchOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import BreadCrumd from '../../../component/admin/breadcrumb/BreadCrumd';

const Patient = () => {

    const columns = [
        {
            title: 'Tên bệnh nhân',
            dataIndex: 'lastName',
            sorter: (a, b) => a.lastName.localeCompare(b.lastName),
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'dob',
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
            title: 'Địa chỉ',
            dataIndex: 'address',
            sorter: (a, b) => a.address.localeCompare(b.address),
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
  };

  const onCloseModal = () => {
    setOpenModal(false);
    setItem({});
  };

  useEffect(() => {
    console.log("GET PATIENT");

    getPatient();
  }, []);

  const getPatient = async () => {
    setLoading(true);
    try {
      const resPatient = await axiosInstance.getNoAuth(`patient`);
      setData(resPatient.data);
    } catch (e) {
      createToast(toastTypes.ERROR, `Error !!!!`);
    }
    setLoading(false);
  };

  const handleFetchItem = async (id) => {
    //setLoading(true);
    try {
      const res = await axiosInstance.search(`/patient/search/${id}`);
      console.log("res fetchItem :", res);
      setItem(res.data);
      console.log("item :", res.data);
      onOpenModal();
      //setLoading(false);
    } catch (err) {
      message.error(err.response.data.message);
      console.log(err);
    }

    useEffect(() => {
        console.log("GET PATIENT")

        getPatient();
    }, []);

    const getPatient = async () => {
        setLoading(true);
        try {
            const resPatient = await axiosInstance.getNoAuth(`/patient`)
            setData(resPatient.data);
        } catch (e) {
            createToast(toastTypes.ERROR, `Error !!!!`)
            console.log(data)
        }
        setLoading(false);
    }



    const handleFetchItem = async (id) => {
        //setLoading(true);
        try {
            const res = await axiosInstance.search(`/patient/${id}`);
            console.log('res fetchItem :', res);
            setItem(res.data);
            console.log('item :', res.data);
            onOpenModal();
            //setLoading(false);
        } catch (err) {
            message.error(err.response.data.message)
            console.log(err);
        }
    };


    const handleDelete = async (id) => {
        setLoading(true);
        try {
            const res = await axiosInstance.deletePatient(`/patient/${id}`);
            getPatient();
            message.success(res.data.message)
            setLoading(false);
        } catch (err) {
            message.error(err.response.data.message)
            console.log(err);
        }
    }

    const handleSubmit = async (item) => {
        if (item?.id) {
            try {
                console.log('edit : ', item.id);
                const res = await axiosInstance.postPatient(`/patient/${item.id}`, item);
                console.log('res Edit :', res);
                getPatient();
                message.success(res.data.message)
                onCloseModal();
            } catch (err) {
                message.error(err.response.data.message)
                console.log(err);
            }
        } else {
            try {
                const res = await axiosInstance.postPatient(`/patient`, item);
                console.log('res Add :', res);
                getPatient();
                message.success(res.data.message)
                onCloseModal();
            } catch (err) {
                message.error(err.response.data.message)
                console.log(err);
            }
        }
    };

    return (
        <Content style={{ margin: '0 16px' }}>
            <BreadCrumd title='Bệnh Nhân' subtitle='Danh sách' />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {<Space direction="horizontal" style={{ width: '100%', justifyContent: 'left' }}>
                    <Button type="primary" htmlType="submit" icon={<PlusOutlined />} onClick={onOpenModal}>
                        Thêm bệnh nhân
                    </Button>
                </Space>}
                <Divider />
                <Table loading={loading} columns={columns} dataSource={data} />
                {<CommonForm fields={columns} handleSubmit={handleSubmit} item={item} openModal={openModal} onCloseModal={onCloseModal} />}
            </div>
        </Content>
    );
}

export default Patient;