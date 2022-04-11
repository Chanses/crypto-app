import React from "react";
import Navbar from "./components/NavBar/Navbar";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Space, Typography } from "antd";
import Exchanges from "./components/Exchanges/Exchanges";
import Cryptocurrencies from "./components/Cryptocurrencies/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails/CryptoDetails";
import News from "./components/News/News";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Crypto <br />
            All right reserved
          </Typography.Title>
          <Space>
            <Link to={"/home"}>Home</Link>
            <Link to={"/exchanges"}>Exchanges</Link>
            <Link to={"/news"}>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
