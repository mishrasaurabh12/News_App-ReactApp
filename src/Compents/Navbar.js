import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";

export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            mode: "light",
            txtColor:"dark"

        }
    }
    changeTheme = () => {
        if (this.state.mode === "light") {
            this.setState({
                mode: "dark",
                txtColor:"light"

            })
            
        }
        else {
            this.setState({
                mode: "light",
                txtColor:"dark"
            })

        }
    }
    render() {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg bg-${this.state.mode}`} id="nav">
                    <div className="container-fluid">
                        <Link className={`nav-link text-${this.state.txtColor}`} to="/">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link text-${this.state.txtColor}`} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link text-${this.state.txtColor}`} to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link text-${this.state.txtColor}`} to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link text-${this.state.txtColor}`} to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link text-${this.state.txtColor}`} to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link text-${this.state.txtColor}`} to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link text-${this.state.txtColor}`} to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link text-${this.state.txtColor}`} to="/technology">Technology</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            onClick={this.changeTheme}
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                        />
                        <label className={`form-check-label text-${this.state.txtColor}`} htmlFor="flexSwitchCheckDefault">
                            {/* {props.mode === 'light' ? 'dark' : 'light'} */}
                            {this.state.mode==='light'?'DarkMode':'LightMode'}
                        </label>
                    </div>
                </nav>
            </div>
        )
    }
}
