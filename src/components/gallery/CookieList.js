import React from 'react';
import product1 from '../../asserts/images/product-1.PNG';
import product2 from '../../asserts/images/product-3.PNG';
import product3 from '../../asserts/images/contact.png';

const p1bg = {
    backgroundImage: `linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.8)),url(${product1})`,
    backgroundSize: "cover",


}
const p2bg = {
    backgroundImage: `linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.8)),url(${product2})`,
    backgroundSize: "cover",


}
const p3bg = {
    backgroundImage: `linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.8)),url(${product3})`,
    backgroundSize: "cover",


}
const CookieList = () => {
    return (
        <div className="row cookie-list">
            <div className="col-md-4 col-10 mx-auto">
                <div  className="card">
                    <div className="card_side card_side-front">
                        <div className="card_picture" style={p1bg}>
                            &nbsp;
                        </div>
                        <div className="card_heading">
                           <span className="card_heading-span">
                               כרמל מלוח
                           </span>
                        </div>
                   {/*     <div className="card_details">
                            <span className="card_details-span">
                                עוגייה 1 עולה 15 שקלים, חבילה של 12 75 שקלים
                            </span>
                        </div>*/}
                    </div>
                    <div className="card_side card_side-back">
                       <div className="card_cta">
                           <div className="card_details-box">
                               <p className="card_details-box-description">
                                   עוגיית כרמל מלוח, שילוב נהדר בין מתוק למלוח.
                                   <br></br>
                                   הטעם המיוחד שלה משתלב בכל זמן ביום ומתאים לכל גיל.
                               </p>
                               <a href="#" className="button button-success btn-success-center">
                                   להזמנה
                               </a>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <div className="card_side card_side-front">
                        <div className="card_picture" style={p2bg}>
                            &nbsp;
                        </div>
                        <div className="card_heading">
                            קקאו
                        </div>
                        <div className="card_details">
                            <span className="card_details-span">

                            </span>
                        </div>
                    </div>
                    <div className="card_side card_side-back">
                        אחורה
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <div className="card_side card_side-front">
                        <div className="card_picture" style={p3bg}>
                            &nbsp;
                        </div>
                        <div className="card_heading">
                           הקלאסית
                        </div>
                        <div className="card_details">
                            <span className="card_details-span">

                            </span>
                        </div>
                    </div>
                    <div className="card_side card_side-back">
                        אחורה
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieList;
