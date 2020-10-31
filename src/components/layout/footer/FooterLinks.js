import React from 'react';

const FooterLinks = () => {
    return (
        <div className="footer_container-links d-flex pt-5 justify-content-around">
            <div className="d-flex">
                <h3 className="footer_container-links-header">
                    ראשי
                </h3>
                <hr className="footer_container-links-divider"/>
            </div>
            <div className="d-flex">
                <h3 className="footer_container-links-header">
                    גלרייה
                </h3>
                <hr className="footer_container-links-divider"/>
            </div>
            <div className="d-flex">
                <h3 className="footer_container-links-header">
                    צור קשר
                </h3>
                <hr className="footer_container-links-divider"/>
            </div>
        </div>
    );
};

export default FooterLinks;
