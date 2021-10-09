import React from 'react'
import Menu from "../components/Navbar";
import Swiper1 from "../components/Swiper1";



export default function Product() {
    return (
        <div>
            <div>
                <h1 className="shopping-cart">New products</h1>
            </div>
            <Swiper1 showValue={2.1} />
            <Swiper1 showValue={2.1} />
            <Swiper1 showValue={2.1} />
            <Menu/>
        </div>
    )
}
