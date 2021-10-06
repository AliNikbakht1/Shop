import React from "react";
import Link from "next/link";
import { Row, Col } from "antd";
import { RiHome3Fill } from 'react-icons/ri';
import { BiCloset } from 'react-icons/bi';
import { MdShoppingCart } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';


export default function navbar() {
  return (
    <div className="navbar">
      <Row className="navbar-row">
        <Col span={6}><div className="navbar-icon"><Link href="/"><RiHome3Fill/></Link></div></Col>
        <Col span={6}><div className="navbar-icon"><BiCloset/></div></Col>
        <Col span={6}><div className="navbar-icon"><Link href="/Shopping"><MdShoppingCart/></Link></div></Col>
        <Col span={6}><div className="navbar-icon"><BiUserCircle/></div></Col>
      </Row>
    </div>
  );
}
