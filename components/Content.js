import React from "react";
import { Row, Col } from "antd";
import { Input } from "antd";
import { FiSearch } from "react-icons/fi";
import Swiper from "../components/Swiper";
import Swiper1 from "../components/Swiper1";
import Menu from "../components/Menu";
import Link from "next/link";

export default function Content() {
    return (
    <div className="content">
        <div>
            <Row>
                <Col span={12}>
                    <h1 className="main-title">Home</h1>
                </Col>
                <Col span={12}>
                    <h1 className="main-icon">
                <Menu />
                    </h1>
                </Col>
            </Row>
            <div className="search">
                <Row>
                    <Col span={24}>
                        <Input
                            className="search-input"
                            size="large"
                            placeholder="Search products of interest"
                            prefix={<FiSearch />}
                        />
                    </Col>
                </Row>
            </div>
        </div>
        <div className="swiper-container">
            <a href="/Futuredesign">
                <Swiper showValue={1} />
            </a>
        </div>    
        <div>
            <Row>
                <Col span={12}>
                    <h2 className="trend-special">
                    <a href="/Trend">Trend special</a>
                    </h2>
                </Col>
                <Col span={12}>
                    <h5 className="trend-special-a">
                    <a href="/Trend">See All {">"}</a>
                    </h5>
                </Col>
            </Row>
            <a href="/Trend">
                <Swiper1 showValue={1.5} />
            </a>
        </div>
        <div>
            <Row>
                <Col span={12}>
                    <h2 className="new-product">
                    <a href="/Product">New products</a>
                    </h2>
                    </Col>
                <Col span={12}>
                    <h5 className="new-product-a">
                    <a href="/Product">See All {">"}</a>
                    </h5>
                </Col>
            </Row>
            <a href="/Product">
                <Swiper1 showValue={2.2} />
            </a>
        </div>
        <div>
            <Row>
                <Col span={12}>
                    <h2 className="best-sellers">
                    <a href="/Bestsellers">Best Sellers</a>
                    </h2>
                </Col>
                <Col span={12}>
                    <h5 className="best-sellers-a">
                    <a href="/Bestsellers">See All {">"}</a>
                    </h5>
                </Col>
            </Row>
            <a href="Bestsellers">
                <Swiper1 showValue={2} />
            </a>
        </div>
    </div>
    );
}
