import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
//import { FormLabel } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    formElement: {
        paddingTop: 15,
        marginTop: 5
    },
    formLabel: {
        fontSize: 20 
    },
    textField: {
        marginTop: 8
    }
}));

function InputField(props){
    //const mobileMatches = useMediaQuery('(max-width:600px)');
    //const tabMatches = useMediaQuery('(max-width:990px)');
    //const deviceType = mobileMatches?"M":"0";
    const classes = useStyles();
    return (
        <div className={classes.formElement}>
            <label for={props.id} className={classes.formLabel}>{props.label}:  </label>
            <TextField id={props.id} label={props.label} variant="outlined" size="small" aria-describedby="my-helper-text" className={classes.textField} />
            <span id="my-helper-text">{props.helperText}</span>
        </div>
    );
}

export default InputField;