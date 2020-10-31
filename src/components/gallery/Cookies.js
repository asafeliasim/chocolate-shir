import React from 'react';
import Divider from "../layout/Divider";
import CookieList from "./CookieList";
const Cookies = () => {
    return (
        <section className="section section-cookies">
            <div className="u-center-text cookies-row">
                <h2 className="heading-secondary">
                    גלריית הטעימות
                </h2>
                <div className="u-center-divider">
                    <Divider className="solid-divider-medium"/>
                </div>
                <h4 className="heading-secondary-sub">
                    במקום ללקק את המסך ולנסות לטעום, תיצרו קשר עכשיו ותזמינו…
                </h4>
            </div>
            <CookieList />
        </section>
    );
};

export default Cookies;
