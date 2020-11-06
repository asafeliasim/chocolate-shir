import React,{useState} from 'react';
import FormControl from "@material-ui/core/FormControl";
import {useStyles} from './material-css/counterStyle';

import Select from "@material-ui/core/Select";


const CookieCounter = ({onCounter}) => {
    const classes = useStyles();
    const [counter,setCounter] = useState(0);


    const handleChange = (event) => {
        onCounter(event.target.value);
    };

    return (
        <div className="cookie-counter">
            <div className="">
                <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                        native
                        value={counter}
                        onChange={handleChange}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        className={classes.option}
                    >

                        <option className={classes.option} value={1}>1</option>
                        <option className={classes.option} value={2}>2</option>
                        <option className={classes.option} value={3}>3</option>
                        <option className={classes.option} value={4}>4</option>
                        <option className={classes.option} value={5}>5</option>
                    </Select>
                </FormControl>
            </div>

        </div>
    );
};

export default CookieCounter;
