import { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    MenuOutlined,
    LineChartOutlined,
    EditOutlined,
    TagOutlined,

} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Routers from './Routers';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminLayout(props) {

    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <span>Bảng điều khiển</span>
                        <Link to="/admin/dashboard" />
                    </Menu.Item>
                    <Menu.Item key="2" icon={<MenuOutlined />}>
                        <span>Lịch đặt</span>
                        <Link to="/admin/appointment" />
                    </Menu.Item>
                    <Menu.Item key="3" icon={<TagOutlined />}>
                        <span>Bác sĩ</span>
                        <Link to="/admin/doctor" />
                    </Menu.Item>
                    <Menu.Item key="8" icon={<UserOutlined />}>
                        <span>Bệnh nhân</span>
                        <Link to="/admin/patient" />
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<LineChartOutlined />} title="Dịch vụ">
                        <Menu.Item key="4">
                            Danh sách
                            <Link to="/admin/service" />
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<EditOutlined />} title="Báo cáo">
                        <Menu.Item key="6">
                            Danh sách
                            <Link to="/admin/report" />
                        </Menu.Item>
                        <Menu.Item key="7">
                            Báo cáo hóa đơn
                            <Link to="/admin/reports" />
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="10" icon={<PieChartOutlined />}>
                        <span>Đăng xuất</span>
                        <Link to="/login" />
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                {/* <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        Bill is a cat.
                    </div>
                </Content> */}
                <Routers />
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>


    );
}

export default AdminLayout;