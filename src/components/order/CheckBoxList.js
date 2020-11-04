import React from 'react';

import CheckBoxCard from "./CheckBoxCard";






const CheckBoxList = ({fills}) => {
    console.log(fills);
    return (
        <div className="checked">
            <ul className="">
                {fills && fills.map((item)=>(
                    <CheckBoxCard id={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default CheckBoxList;
