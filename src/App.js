// import "antd/dist/antd.css";
import './App.css';
import { Menu } from "antd";
import Content from './Content';
import { DashboardOutlined, UnorderedListOutlined, UserOutlined, HomeOutlined, PoweroffOutlined } from "@ant-design/icons/lib/icons";
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom'
import Activ from './Aciveuser'
import Dis from './DisabledUser'
import Today from './Today';
import Sforms from './Sforms';


import Forms from './Forms';
import Layout from './layout';
// import Sforms from './Sforms';

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Forms />}></Route>
      <Route path="/dashboard" element={<Layout><h1>portifolio design</h1>Dashboard</Layout>}></Route>
      <Route path="/ActiveUserList" element={<Activ />}></Route>
      <Route path="/DisableUserList" element={<Dis />}></Route>

      <Route path="/profile" element={<Layout><h1>Profile</h1></Layout>}></Route>
      <Route path="/Noofuser" element={<Today />}></Route>
      <Route path="/Signin" element={<Sforms />}></Route>

      <Route path="/Signout" element={<Layout><h1>home</h1></Layout>}></Route>


    </Routes>
  </>
  )
}
export default App

