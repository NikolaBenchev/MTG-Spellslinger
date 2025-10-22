import { Menu, Layout, Button } from "antd";
import {
    TeamOutlined,
    FolderOutlined,
    HomeOutlined,
    UserOutlined,
    LogoutOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router";
import "./SideNav.css";

const SideNav = () => {
    const { Sider } = Layout;
    const navigate = useNavigate();
    const menuItems = [
        {
            key: "dashboard",
            label: "Dashboard",
            path: "/dashboard",
            icon: <HomeOutlined />,
        },
        {
            key: "profile",
            label: "Profile",
            path: "/profile",
            icon: <UserOutlined />,
        },
        {
            key: "decks",
            label: "Decks",
            path: "/decks",
            icon: <FolderOutlined />,
        },
        {
            key: "lobbies",
            label: "Lobbies",
            path: "/lobbies",
            icon: <TeamOutlined />,
        },
        {
            key: 'settings',
            label: 'Settings',
            path:'/settings',
            icon: <SettingOutlined/>
        }
    ];

    const handleMenuClick = ({ key }: { key: string }) => {
        const item = menuItems.find((item) => item.key === key);

        if (item) {
            navigate(item.path);
        }
    };

    const handleLogout = () => {

    }

    return (
        <Sider className="sideNav">
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["dashboard"]}
                items={menuItems}
                onClick={handleMenuClick}
                style={{ flex: 1, minWidth: 0 }}
            />
            <Button
                type="primary"
                icon={<LogoutOutlined/>}
                onClick={handleLogout}
                style={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    right: 16,
                    width: "calc(200px - 32px)", // Adjust for collapsed width
                }}
            >
                Logout
            </Button>
        </Sider>
    );
};

export default SideNav;
