import React from 'react';
import './Footer.scss';

const Footer = () => (
    <footer>
        <div className={"social-links"}>
            <p>Social:</p>
            <a href="https://github.com/nikolasaratlija/nl-trip-advisor-react">
                <img src={require("../../assets/images/GitHub-Mark-Light-32px.png")} alt="GitHub logo"/>
                <span className={"github-text"}>View on GitHub</span>
            </a>
        </div>

        <div className={"attributions"}>
            <p>Attributions:</p>
            <img src={require("../../assets/images/powered_by_google_on_non_white.png")} alt="powered by Google"/>
        </div>
    </footer>
);

export default Footer;