import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
export default function profile() {
    return (
        <div className='profile-container'>
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://www.linkedin.com/in/nisha-jha-b33248206/">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-google-plus-square"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-telegram"></i>
                            </a>
                            <a href="https://github.com/Nisha213-mar">
                                <i className="fa fa-github"></i>
                            </a>
                            <a href="https://twitter.com/home?lang=en">
                                <i className="fa fa-twitter"></i>
                            </a>

                        </div>

                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Nisha Jha</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className="primary-text">
                            {" "}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[

                                        "Ethusiastic Dev🔴",
                                        1000,
                                        "Fronted Developer😎",
                                        1000,
                                        "React/React Native Dev💻",
                                        1000,
                                        "Mern Stack Developer 🖥️",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Knack of building applications with front and backend operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href='NishaJha.pdf' download=' NishaJha.pdf'>
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    )
}
