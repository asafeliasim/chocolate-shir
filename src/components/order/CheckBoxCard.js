import React,{useState} from 'react';
import Checkbox from "@material-ui/core/Checkbox";

const CheckBoxCard = ({item}) => {
    const [check,setCheck] = useState(item.checked);
    console.log(item)
    return (
        <>
            <li className="checked_list-item">
                <Checkbox
                    size="medium"
                    checked={check}
                    onChange={e=>setCheck(e.target.checked)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <p className="text-muted mt-2 checked_list-item_p">{item.title}</p>
            </li>
        </>
    );
};

export default CheckBoxCard;
