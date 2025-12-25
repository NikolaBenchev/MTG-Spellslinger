import { Menu, Layout, Button, Row, Col, Tooltip } from "antd";
import {
    TeamOutlined,
    FolderOutlined,
    HomeOutlined,
    UserOutlined,
    SettingOutlined,
    PoweroffOutlined,
} from "@ant-design/icons";
import { getAuthState } from "../../selectors";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../features/auth/auth.async";
import type { AppDispatch } from "../../store/store";
import "./SideNav.scss";

const SideNav = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { isAuthenticated, userData } = useSelector(getAuthState);
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
            key: "settings",
            label: "Settings",
            path: "/settings",
            icon: <SettingOutlined />,
        },
    ];

    const handleMenuClick = ({ key }: { key: string }) => {
        const item = menuItems.find((item) => item.key === key);

        if (item) {
            navigate(item.path);
        }
    };

    return (
        <Sider className="side-nav">
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["dashboard"]}
                items={menuItems}
                onClick={handleMenuClick}
                style={{ flex: 1, minWidth: 0 }}
            />
            <Row
                className="auth-control-buttons"
                justify="center"
                align="middle"
            >
                {isAuthenticated ? (
                    <>
                        <Col
                            style={{
                                marginRight: "10px",
                            }}
                        >
                            <UserOutlined
                                className="user-profile-icon"
                                onClick={() => navigate("/profile")}
                            />
                        </Col>
                        <Col className="username-container">
                            <Row>
                                <h2>{userData?.username}</h2>
                                <Tooltip title="Logout">
                                    <Button
                                        type="primary"
                                        icon={
                                            <PoweroffOutlined
                                                onClick={() =>
                                                    dispatch(logout())
                                                }
                                            />
                                        }
                                        style={{ marginLeft: "10px" }}
                                        size="small"
                                    />
                                </Tooltip>
                            </Row>
                            <Row>
                                {/* //TODO: change after implementing the MMR system */}
                                <h5>3756 mmr</h5>
                            </Row>
                        </Col>
                    </>
                ) : (
                    <Col className="login-register-buttons-container">
                        <Button
                            type="primary"
                            onClick={() => navigate("/register")}
                        >
                            Register
                        </Button>
                        <Button
                            type="primary"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </Button>
                    </Col>
                )}
            </Row>
        </Sider>
    );
};

export default SideNav;
