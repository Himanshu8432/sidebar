import { Menu } from "antd";
import Content from './Content';
import { DashboardOutlined, UnorderedListOutlined, UserOutlined, HomeOutlined, PoweroffOutlined } from "@ant-design/icons/lib/icons";
import { useNavigate } from 'react-router-dom';
function Sidemenu() {
    const navigate = useNavigate()

    return (

        <div style={{ display: "flex", flexDirection: "row" }}>
            <Menu className='classl'
                onClick={({ key }) => {
                    if (key === "signout") {
                        alert("successfully logout")
                    } else {
                        navigate(key);
                    }

                }}
                defaultSelectedKeys={[window.location.pathname]}
                items={[
                    { label: "Home", key: "/", icon: <HomeOutlined /> },
                    { label: "Dashboard", key: "/dashboard", icon: <DashboardOutlined /> },
                    {
                        label: "Users Lists", key: "/userList", icon: <UnorderedListOutlined />,
                        children: [
                            { label: "ActiveUsers", key: "/ActiveUserList" },
                            { label: "DisabledUsers", key: "/DisableUserList" }



                        ]
                    },
                    { label: "profiles", key: "/profile", icon: <UserOutlined /> },
                    { label: "noofusers", key: "/Noofuser", icon: <UserOutlined /> },
                    { label: "Signin", key: "/signin", icon: <PoweroffOutlined />, primary: true },
                    { label: "Signout", key: "/signout", icon: <PoweroffOutlined />, danger: true }

                ]}>
            </Menu>


        </div>
    );
}

export default Sidemenu;