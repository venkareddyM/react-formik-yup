import React,{useState} from "react"; 
import {Formik,Form} from "formik"; 
import * as Yup from "yup"; 
import Formcontroller from "./Formcontroller"; 
 
function App(){ 
 
  const [res,setRes] = useState(""); 
 
  const initialValues = { 
    "fname" : "", 
    "lname" : "" 
 
  }; 
 
  const validationSchema = Yup.object({ 
      "fname" : Yup.string() 
                   .required("Required !") 
                   .min(4,"minimum 3 characters are required") 
                   .max(10,"maximum 6 charcters are required"), 
      "lname" : Yup.string() 
                   .required("Required !") 
                   .min(4,"minimum 3 characters are required") 
                   .max(10,"maximum 6 charcters are required") 
  }) 
 
  const onSubmit = values=>{ 
    const {fname,lname} = values; 
    fname === "venka" && lname === "reddy" ? setRes("Login Success") : setRes("Login Fail") 
    console.log(values); 
  } 
 
  return( 
    <div className="container">
      <h2>Login Page</h2>
     <Formik initialValues={initialValues} 
             validationSchema={validationSchema} 
             onSubmit={onSubmit}> 
             { 
                 formik=>{ 
                  return( 
                     <Form> 
                        <Formcontroller control="input" 
                                        label="First Name" 
                                        name="fname" 
                                        type="text"></Formcontroller> 
 
                        <Formcontroller control="input" 
                                        label="Last Name" 
                                        name="lname" 
                                        type="text"></Formcontroller> <br/>
                      
                        <button className="submit-button" type="submit" disabled={!formik.isValid}>Register</button> 
 
                        <h1>{res}</h1> 
                      
                     </Form> 
                  ) 
                 } 
             } 
 
     </Formik> 
     </div>
  ) 
} 
 
export default App; 