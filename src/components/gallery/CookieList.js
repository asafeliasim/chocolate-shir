import React from 'react';

import CookieCard from "./CookieCard";

import {cookies} from './cookie-data/cookies';


const CookieList = () => {
    return (
        <div className="row px-5 cookie-list">
            {
                cookies && cookies.map((product,id)=>(
                    <div key={id} className="col-xl-3 col-sm-6 col-12 mx-auto mt-auto">
                        <CookieCard name={product.name} bgStyle={product.bgStyle} fills={product.fills} types={product.types} />
                    </div>
                ))
            }
        </div>
    );
};

export default CookieList;
