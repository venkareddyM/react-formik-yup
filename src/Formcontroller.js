import React from "react"; 
import Input from "./Input"; 
function FormController(props){ 
    const {control,...rest} = props; 
    switch(control){ 
        case "input": 
            return <Input {...rest}></Input> 
        default: 
            return null; 
    }  
} 
export default FormController; 
