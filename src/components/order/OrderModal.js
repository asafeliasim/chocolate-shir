import React,{useState,useEffect} from 'react';

// ---------- COMPONENTS -------------------//
import CheckBoxList from "./CheckBoxList";
import CookieCounter from "./CookieCounter";
import CookieType from "./CookieType";
// MATERIAL UI COMPONENTS //
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from "../layout/Divider";
import DialogContent from "@material-ui/core/DialogContent";

import {useStyles} from "./material-css/orderStyle";

import shirLogo from '../../asserts/images/‏‏shirlogo.PNG';

const OrderModal = ({openDialog,closeHandle,fills,types}) => {
    console.log("open dialog")
    console.log(openDialog)
    const [open,setOpen] = useState(false);

    const classes = useStyles();

    useEffect(()=>{
        setOpen(openDialog)
    },[openDialog])

    const handleClose = () => {
        setOpen(false);
        closeHandle();
    }


    return (
        <Dialog open={open} onClose={handleClose}>
            <div className={classes.root} >

                <DialogTitle id="simple-dialog-title">
                    <h2 className="heading-secondary heading-secondary-modal">
                        <div className="d-flex justify-content-center mb-2" style={{display:'block'}}>
                            החלק הכי חשוב!
                        </div>

                        <span style={{display:'block'}}>
                         בחר/י במילוי האהוב עלייך
                        </span>
                    </h2>
                    <div className="u-center-divider">
                        <Divider className="solid-divider-large"/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <img src={shirLogo} alt="" style={{width:"8rem"}} />
                    </div>

                </DialogTitle>
                <DialogContent>
                    <CheckBoxList fills={fills}/>
                    <CookieCounter />
                    {types && types.length > 0 && <CookieType types={types}/>}
                    <div className="d-flex justify-content-center mt-5">

                        <a

                            className="button button-success button-success-small"
                        >
                            להזמנה
                        </a>
                    </div>

                </DialogContent>

            </div>
        </Dialog>
    );
};

export default OrderModal;
