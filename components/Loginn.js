import React from 'react'
import Menu from "../components/Navbar";

export default function Login() {
    return (
        <div className="Login">
            <form>
                <div>
                    username:<input></input>
                </div>
                <div>
                    Password:<input></input>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
            <Menu/>
        </div>
    )
}
