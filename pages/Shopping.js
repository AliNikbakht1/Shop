import React from "react";
import Menu from "../components/Navbar";
import Link from "next/link";

export default function Shopping() {
    return (
        <div>
            <div>
                <h1 className="shopping-cart">Shopping cart</h1>
            </div>
        <Menu />
    </div>
    );
}
