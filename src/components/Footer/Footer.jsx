import React from 'react'
const state = {
    img: "/img/logo.png",
    copyright: "©2022 weareherelabs, All Rights Reserved By",
    owner: "weareherelabs",
    ownerLink: "https://weareherelabs.com/#about-us",
    socialData: [
        {
            "id": 1,
            "link": "https://www.facebook.com/",
            "icon": "icon-social-facebook"
        },
        {
            "id": 2,
            "link": "https://twitter.com/",
            "icon": "icon-social-twitter"
        },
        {
            "id": 3,
            "link": "https://www.linkedin.com/",
            "icon": "icon-social-linkedin"
        },
        {
            "id": 4,
            "link": "https://www.reddit.com/",
            "icon": "icon-social-reddit"
        },
        {
            "id": 5,
            "link": "https://discord.com/",
            "icon": "icon-social-vkontakte"
        },
        {
            "id": 6,
            "link": "https://www.youtube.com/",
            "icon": "icon-social-youtube"
        }
    ],
    "widgetData": [
        {
            "id": 1,
            "text": "Features",
            "link": "/blog"
        },
        {
            "id": 2,
            "text": "Roadmap",
            "link": "/blog"
        },
        {
            "id": 3,
            "text": "How It Works",
            "link": "/blog"
        },
        {
            "id": 4,
            "text": "Blog",
            "link": "/blog"
        },
        {
            "id": 5,
            "text": "Privacy Policy",
            "link": "/blog"
        }
    ]
}
function Footer() {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 text-center">
                        {/* Footer Items */}
                        <div className="footer-items">
                            {/* Logo */}
                            <a className="navbar-brand" href="/">
                                <img src={state.img} alt="" />
                            </a>
                            {/* Social Icons */}
                            <div className="social-icons d-flex justify-content-center my-4">
                                {state.socialData.map((item, idx) => {
                                    return (
                                        <a key={`fsd_${idx}`} className="facebook" href={item.link} target="_blank">
                                            <i className={item.icon} />
                                            <i className={item.icon} />
                                        </a>
                                    );
                                })}
                            </div>
                            <ul className="list-inline">
                                {state.widgetData.map((item, idx) => {
                                    return (
                                        <li key={`fwd_${idx}`} className="list-inline-item"><a href={item.link}>{item.text}</a></li>
                                    );
                                })}
                            </ul>
                            {/* Copyright Area */}
                            <div className="copyright-area py-4">{state.copyright} <a href={state.ownerLink} target="_blank">{state.owner}</a></div>
                        </div>
                        {/* Scroll To Top */}
                        <div id="scroll-to-top" className="scroll-to-top">
                            <a href="#header" className="smooth-anchor">
                                <i className="fa-solid fa-arrow-up" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer