import React from "react";
import {Field,ErrorMessage} from 'formik';
import TextError from './TextError';
function Input (Props){

    const{label,name,...rest}=Props;
return(
    <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field name={name}{...rest}></Field>
        <ErrorMessage name={name} component={TextError}></ErrorMessage>
    </div>
)
}
export default Input;
