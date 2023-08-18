import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";

import { Field, useField } from "formik";
import { InputProp } from "../../../types";
import { Input } from "@chakra-ui/react";

export const InvoiceInput = ({ label, name, placeholder, type }: InputProp) => {
  const [field, meta] = useField(name);
  const notValid = !!(meta.error && meta.touched);
  return (
    <FormControl
      isInvalid={notValid}
      sx={{
        display: "grid",
        
        templateColumns:'6',
        gap: "3",
        alignItems: "center",
      }}
    >
      <FormLabel sx={{
        colSpan:'2',
        whiteSpace: 'nowrap',
        
      }}
       htmlFor={name}>{label}</FormLabel>
      <Field
        as={Input}
        colSpan={4}
        height={"44px"}
        
        {...field}
        placeholder={placeholder}
        type={type}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default InvoiceInput;
