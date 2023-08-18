
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
  } from "@chakra-ui/form-control";
 
  import { Field, useField } from "formik";
  import { InputProp } from "../../../types";  
import { Input} from "@chakra-ui/react";

  export const InvoiceField = ({ label, name, placeholder, type}:InputProp) => {
    const [field, meta] = useField(name);
    const notValid = !!(meta.error && meta.touched);
    return (
      <FormControl isInvalid={notValid}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Field as={Input} 
        height={'44px'}
        p={2}
        
         {...field} placeholder={placeholder} type={type} />
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    );
  };
  
  export default InvoiceField;
  