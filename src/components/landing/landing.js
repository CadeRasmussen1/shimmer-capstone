import React from "react";
import "./landing.css"


export default function Landing() {
    return (
        <div className="landing-container">
            <div className="landing-content">
                <p className="page-title-content">Shimmer</p>
                <hr className="line-bar" />
                <link to="/signIn">
                    <button className="sign-in-btn">Sign in</button>
                </link>
                <p className="Dont-have">
                    Don't have an account?
                </p>
            </div>
        </div>
    )
}