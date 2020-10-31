import React from 'react';
import Divider from "../layout/Divider";
import image from '../../asserts/images/‏about.PNG';

const Contact = () => {
    return (
        <section className="section section-contact">
            <div className="u-center-text cookies-row">
                <h2 className="heading-secondary">
                   צור קשר
                </h2>
                <div className="u-center-divider">
                    <Divider className="solid-divider-medium"/>
                </div>
                <h4 className="heading-secondary-sub">
                   אני אשמח לשמוע דעות וטעמים שונים, גם המלצות לטעמים חדשים יתקבלו במתיקות...
                </h4>
            </div>
            <div className="row">
                <div className="col-1-of-3">
                    <div className="img_container">
                        <img src={image} alt="image_container-pink" className="img_container-pink"/>
                    </div>
                </div>
                <div className="col-1-of-3">
                    טופס
                </div>
                <div className="col-1-of-3">
                    כתובת וטלפונים
                </div>
            </div>
        </section>
    );
};

export default Contact;
