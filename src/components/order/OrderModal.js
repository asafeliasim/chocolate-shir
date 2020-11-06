import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
// ---------- COMPONENTS -------------------//
import CheckBoxList from "./CheckBoxList";
import CookieCounter from "./CookieCounter";
import CookieType from "./CookieType";
import Delivery from "./Delivery";
// MATERIAL UI COMPONENTS //
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from "../layout/Divider";
import DialogContent from "@material-ui/core/DialogContent";

import {useStyles} from "./material-css/orderStyle";

import shirLogo from '../../asserts/images/‏‏shirlogo.PNG';

import {setProductToOrder,setUserDetails} from '../../redux/orderActions';

const OrderModal = ({openDialog,closeHandle,fills,name,types}) => {
    console.log("open dialog")
    console.log(openDialog)
    const dispatch = useDispatch();
    const [open,setOpen] = useState(false);
    const [type,setType] = useState("");
    const [userName,setUserName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [sum,setSum] = useState(0);
    const classes = useStyles();
    const userState= useSelector(state=>state)
    const {userRegister} = userState;
    useEffect(()=>{
        setOpen(openDialog)
    },[openDialog])


    const handleClose = () => {
        setOpen(false);
        closeHandle();
    }
    const addToCookies = (name,type,sum) => {
        if(!userRegister){
            console.log("user register")
            dispatch(setUserDetails(userName,phone,email,address));
        }
        dispatch(setProductToOrder(name,type,sum))
    }

    const order = `שם: ${userName} <br/>טלפון: ${phone} <br/>`
    return (
        <Dialog open={open} onClose={handleClose}>
            <div className={classes.root}>

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
                    {!userRegister &&
                        <>
                        <div className="user_details">
                            <div className="form_group">
                                <input
                                    type="name"
                                    className="form_input"
                                    placeholder="שם מלא"
                                    id="name"
                                    onChange={e=>setUserName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form_group">
                                <input
                                    type="phone"
                                    className="form_input"
                                    placeholder="טלפון נייד"
                                    id="phone"
                                    onChange={e=>setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form_group">
                                <input
                                    type="email"
                                    className="form_input"
                                    placeholder='דוא"ל'
                                    id="email"
                                    onChange={e=>setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <Delivery setAddress={setAddress}/>
                        </>

                    }
                    <CheckBoxList fills={fills}/>
                    <CookieCounter onCounter={setSum}/>

                    {types && types.length > 0 && <CookieType types={types} setType={setType}/>}

                    <div className="d-flex justify-content-center mt-5">

                        <a
                            href={`https://api.whatsapp.com/send?phone=972548115850/?text=${order}`}
                            target="_blank"
                            onClick={()=>addToCookies(name,type,sum)}
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
