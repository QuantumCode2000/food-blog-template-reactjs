import React from 'react';
import "./styles/Footer.css"
import logoCopyright from "../images/Frame.svg"
const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <div className="footer-top">
                    <div className="about footer-top__card">
                        <h1>About</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat posuere mauris ac scelerisque. Gravida id dui arcu nibh </p>
                    </div>
                    <div className="archives footer-top__card">
                        <h1>
                            Archives
                        </h1>
                    </div>
                    
                    <div className="recipes footer-top__card">
                        <h1>Recipes</h1>
                    </div>

                    <div className="newsletter footer-top__card ">
                        <h1>Newsletter</h1>
                    </div>
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

