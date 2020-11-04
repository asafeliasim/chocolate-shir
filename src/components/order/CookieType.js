import React,{useState} from 'react';
import FormControl from "@material-ui/core/FormControl";
import {useStyles} from './material-css/counterStyle';

import Select from "@material-ui/core/Select";


const CookieType = ({types}) => {
    const classes = useStyles();
    const [type,setType]=useState(1)

    const handleChange = (event) => {
        setType(event.target.value);
    }
    return (
        <div className="cookie-counter">
            <div className="">
                <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                        native
                        value={type}
                        onChange={handleChange}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        className={classes.option}
                    >

                        {
                            types.map((item)=>(
                                <option key={item.id} className={classes.option} value={item.id}>{item.title}</option>
                            ))
                        }

                    </Select>
                </FormControl>
            </div>

        </div>
    );
};

export default CookieType;
