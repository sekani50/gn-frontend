
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Field, useField } from "formik";
import { InputProp } from "../../types";

export const InputField = ({ label, name, placeholder, type}:InputProp) => {
  const [field, meta] = useField(name);
  const notValid = !!(meta.error && meta.touched);
  return (
    <FormControl isInvalid={notValid}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Field as={Input} 
      height={'44px'}
       {...field} placeholder={placeholder} type={type} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
