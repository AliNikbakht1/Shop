import React from "react";
import Menu from "../components/Navbar";

export default function Shopping() {
    return (
        <div>
            <div>
                <h1 className="shopping-cart">Shopping cart</h1>
            </div>
            <div className="cart-item">Total ( 3 ) item</div>
            <Menu />
        </div>
    );
}
