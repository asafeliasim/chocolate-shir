import React from 'react';
import product1 from '../../asserts/images/product-1.PNG';
import product2 from '../../asserts/images/product-3.PNG';
import product3 from '../../asserts/images/contact.png';
import CookieCard from "./CookieCard";

import {cookies} from './cookie-data/cookies';

const data = [
    {
        bgStyle: {
            backgroundImage: `linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.8)),url(${product1})`,
            backgroundSize: "cover",
        },
        name: "כרמל מלוח",
        desc: "עוגיית כרמל מלוח, שילוב נהדר בין מתוק למלוח.\n" +
            "                                   \n" +
            "                                   הטעם המיוחד שלה משתלב בכל זמן ביום ומתאים לכל גיל."
    },
    {
        bgStyle: {
            backgroundImage: `linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.8)),url(${product2})`,
            backgroundSize: "cover",
        },
        name: "קקאו",
        desc: "עוגיית כרמל מלוח, שילוב נהדר בין מתוק למלוח.\n" +
            "                                   \n" +
            "                                   הטעם המיוחד שלה משתלב בכל זמן ביום ומתאים לכל גיל."
    },
    {
        bgStyle: {
            backgroundImage: `linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.8)),url(${product3})`,
            backgroundSize: "cover",
        },
        name: "קלאסי",
        desc: "עוגיית כרמל מלוח, שילוב נהדר בין מתוק למלוח.\n" +
            "                                   \n" +
            "                                   הטעם המיוחד שלה משתלב בכל זמן ביום ומתאים לכל גיל."
    },

]
const CookieList = () => {
    return (
        <div className="row px-5 cookie-list">
            {
                cookies && cookies.map((product,id)=>(
                    <div key={id} className="col-md-4 mx-auto col-10  mt-auto">
                        <CookieCard name={product.name} bgStyle={product.bgStyle} desc={product.desc} />
                    </div>
                ))
            }
        </div>
    );
};

export default CookieList;
