import React from 'react';
import "./styles/Footer.css"
import logoCopyright from "../images/Frame.svg"
const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <div className="footer-top">
                    <div className="about">ab</div>
                    <div className="archives">ar</div>
                    <div className="newsletter">news</div>
                    <div className="recipes">rec</div>
                </div>
                <div className="footer-bottom">
                    <div className="copyright">
                        <img src={logoCopyright} alt="" />
                        <p>Copyright 2020 by <strong>ojjomedia</strong>. All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
