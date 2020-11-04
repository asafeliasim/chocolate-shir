import React,{useState} from 'react';
import OrderModal from "../order/OrderModal";

const CookieCard = ({bgStyle,name}) => {
    const [openOrder,setOpenOrder] = useState(false);

    const handleOpen = () =>{
        setOpenOrder(!openOrder);
    }
    const closeHandle = () => setOpenOrder(false);
    return (
        <div  className="card">
            <div className="card_side card_side-front">
                <div className="card_picture" style={bgStyle}>
                    &nbsp;
                </div>
                <div className="card_heading">
                           <span className="card_heading-span">
                               {name}
                           </span>

                </div>
                <div className="card_button">
                    <a
                        onClick={handleOpen}
                        className="button button-success button-success-small"
                    >
                        למלא לחץ כאן
                    </a>
                </div>
                <OrderModal openDialog={openOrder} closeHandle={closeHandle}/>
            </div>

        </div>
    );
};

export default CookieCard;
