import React from 'react';

import CheckBoxCard from "./CheckBoxCard";





const data = [
    {
        id:"1",
        title:"בלי מילוי",
        checked:true
    },
    {
        id:"2",
        title:"עם וניל",
        checked:false
    },
    {
        id:"3",
        title:"עם שוקו",
        checked:false
    },
]


const CheckBoxList = () => {
    return (
        <div className="checked">
            <ul className="">
                {data && data.map((item)=>(
                    <CheckBoxCard id={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default CheckBoxList;
