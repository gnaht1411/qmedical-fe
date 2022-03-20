
import { Form, Input, Modal, message, InputNumber, Button } from 'antd'
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from '../../../api/axiosInstance';
import BreadCrumd from '../../../component/admin/breadcrumb/BreadCrumd';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const AddService = (props) => {

    const { openModal, onCloseModal } = props;

    const [name, setName] = useState('');
    const [price, setPrice] = useState(500000);
    const [unit, setUnit] = useState('');
    const [des, setDes] = useState('');
    //const history = useHistory();
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, price, unit, des, id };
        if (id) {
            axiosInstance.putService(`/service`, data).then(res => {
                message.success('Update successfully')
                //history.push('/admin/service');
                navigate('/admin/service');
            }).catch(err => {
                message.error('Update failed: ' + err.message)
            })
        } else {
            axiosInstance.postService(`/service`, data).then(res => {
                message.success('Add successfully')
                //history.push('/admin/service');
                navigate('/admin/service');
            }).catch(err => {
                message.error('Add failed: ' + err.message)
            })
        }
    }

    useEffect(() => {
        if (id) {
            axiosInstance.search(`/service/${id}`).then(res => {
                console.log('res : ', res);
                setName(res.data.name);
                setPrice(res.data.price);
                setUnit(res.data.unit);
                setDes(res.data.des);

                console.log('name', name);

                console.log('name : ', res.data.name);
                console.log('price : ', res.data.price);
                console.log('unit : ', unit);
                console.log('des : ', des);
                message.success('Get id successfully');
            }).catch(err => {
                message.error('Update failed: ' + err.message)
            })
        }
    }, [])

    return (
        <Content style={{ margin: '0 16px' }}>
            <BreadCrumd title='Dịch vụ' subtitle={id ? 'Cập nhật dịch vụ' : 'Thêm mới dịch vụ'} />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <h3 style={{ textAlign: 'center' }}>{id ? 'Cập nhật' : 'Thêm mới'}</h3>
                <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
                    <Form.Item
                        name="name"
                        label="Tên dịch vụ"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        name="price"
                        label="Giá dịch vụ"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <InputNumber name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        name="unit"
                        label="Đơn vị"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input name="unit" value={unit} onChange={(e) => setUnit(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        name="des"
                        label="Mô tả"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input name="des" value={des} onChange={(e) => setDes(e.target.value)} />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button htmlType="button" >
                            Cancel
                        </Button>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={(e) => handleSubmit(e)}
                        >
                            {id ? 'Cập nhật' : 'Thêm mới'}
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </Content>
    );
}

export default AddService;