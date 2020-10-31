import React from 'react';
import Divider from "../layout/Divider";
import shirLogo from '../../asserts/images/‏‏shirlogo.PNG';
import product3 from '../../asserts/images/product-3.PNG';

const About = () => {
    return (
        <div className="section section_about">
            <div className="row">
                <div className="col-md-6 col-sm-10 mx-auto">
                    <div className="u-center-text cookies-row">
                        <h2 className="heading-secondary">
                            טעימה משוקולד שיר
                        </h2>
                        <div className="u-center-divider">
                            <Divider className="solid-divider-medium"/>
                        </div>
                        <h4 className="heading-secondary-sub">
                            שוקולד שיר, עסק מתחיל וכבר מוצלח שהוקם ע"י שיר אביטן בעיר שדרות. שיר לקחה את העוגיית שוקולד צ'יפס הקלאסית והאהובה על כולנו והפכה אותה למאנצ' המושלם במגוון טעמים מיוחדים עם מתיקות מעודנת שמתאימה לכל גיל וכל שלב ביום.
                            <br></br>
                            <br></br>
                            בנוסף, שיר גם מכינה חבילת עוגיות קפואות עם הוראות הכנה פשוטות בשביל לקבל עוגיות טריות כל יום בשבוע.
                        </h4>
                    </div>
                    <div className="logo_container">
                        <img src={shirLogo} alt="" className="logo_container-logo"/>
                    </div>
                </div>
                <div className="col-md-6 col-sm-10 mx-auto">
                    <div className="img_container">
                        <img src={product3} alt="" className="img_container-img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
