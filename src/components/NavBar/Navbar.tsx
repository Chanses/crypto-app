import React from "react";
import { Avatar, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import logo from "../../images/cryptocurrency.png";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={logo} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item key={1} icon={<HomeOutlined />}>
          <Link to={"/home"}>Home</Link>
        </Menu.Item>
        <Menu.Item key={2} icon={<FundOutlined />}>
          <Link to={"/cryptocurrencies"}>CryptoCurrencies</Link>
        </Menu.Item>
        <Menu.Item key={3} icon={<MoneyCollectOutlined />}>
          <Link to={"/exchanges"}>Exchanges</Link>
        </Menu.Item>
        <Menu.Item key={4} icon={<BulbOutlined />}>
          <Link to={"/news"}>News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
