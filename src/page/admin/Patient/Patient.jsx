import React, { useEffect, useState } from "react";
import { Button, Divider, message, Popconfirm, Space, Input } from "antd";
import { EditOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { Content } from "antd/lib/layout/layout";
import BreadCrumd from "../../../component/admin/breadcrumb/BreadCrumd";
import CommonForm from "../../../component/admin/form/CommonForm";
import axiosInstance from "../../../api/axiosInstance";

const Search = Input.Search;

const Patient = () => {
  const columns = [
    {
      title: "Tên bệnh nhân",
      dataIndex: "lastName",
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: "Ngày sinh",
      dataIndex: "dob",
    },
    {
      title: "Điện thoại",
      dataIndex: "phone",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      sorter: (a, b) => a.address.localeCompare(b.address),
    },

    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (item) => (
        <>
          <Button
            type="primary"
            onClick={() => handleFetchItem(item.id)}
            shape="round"
            icon={<EditOutlined />}
          ></Button>
        </>
      ),
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
    console.log("GET Patient");
    getPatient();
  }, []);

  const getPatient = async () => {
    setLoading(true);
    try {
      const resPatient = await axiosInstance.getNoAuth("patient/no-page");
      setData(resPatient.data);
    } catch (err) {
      message.error(err ? err.response.data.message : err.message);
    }
    setLoading(false);
  };

  const handleFetchItem = async (id) => {
    setLoading(true);
    try {
      const res = await axiosInstance.search(`/patient/${id}`);
      console.log("res fetchItem :", res);
      setItem(res.data);
      console.log("item :", res.data.id);
      onOpenModal();
      setLoading(false);
    } catch (err) {
      message.error(err ? err.response.data.message : err.message);
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const res = await axiosInstance.deletePatient(`/patient/${id}`);
      getPatient();
      message.success("Xóa thành công");
      setLoading(false);
    } catch (err) {
      message.error(err ? err.response.data.message : err.message);
      console.log(err);
    }
  };

  const handleSubmit = async (item) => {
    if (item?.id) {
      try {
        console.log("edit : ", item.id);
        const res = await axiosInstance.putPatient(`/patient`, item);
        getPatient();
        message.success("Sửa thành công");
        onCloseModal();
      } catch (err) {
        message.error(err ? err.response.data.message : err.message);

        console.log(err);
      }
    } else {
      try {
        const res = await axiosInstance.postPatient(`/patient`, item);
        getPatient();
        message.success("Thêm mới thành công !");
        onCloseModal();
      } catch (err) {
        message.error(err ? err.response.data.message : err.message);
        console.log(err);
      }
    }
  };

  return (
    <Content style={{ margin: "0 16px" }}>
      <BreadCrumd title="Dịch vụ" subtitle="Danh sách" />
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Space
          direction="horizontal"
          style={{ width: "100%", justifyContent: "left" }}
        >
          {/* <Link to="add"> */}
          <Button
            type="primary"
            htmlType="submit"
            icon={<PlusOutlined />}
            onClick={onOpenModal}
          >
            Thêm Bệnh nhân
          </Button>
          {/* </Link> */}
        </Space>

        <Search
          placeholder="Search ..."
          style={{ width: "30%", float: "right", marginTop: "-30px" }}
        />
        <Divider />

        <Table loading={loading} columns={columns} dataSource={data} />
        <CommonForm
          fields={columns}
          handleSubmit={handleSubmit}
          item={item}
          openModal={openModal}
          onCloseModal={onCloseModal}
        />
      </div>
    </Content>
  );
};

export default Patient;
