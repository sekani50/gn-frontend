import { Button } from "@chakra-ui/button";
import { Heading, VStack } from "@chakra-ui/layout";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import InputField from "../inputfield/inputfield";
import { FormikValue } from "../../types";
import UploadingImage from "../inputfield/uploadingImage";
import { useNavigate } from "react-router-dom";
function OnBoarding() {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ email: "", image: null }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email").required("Email required"),
      })}
      onSubmit={(values, actions) => {
        console.log(JSON.stringify(values, null, 2));
        //submit form and route with the user data
        navigate("/invoice", {
          state: {
            data: JSON.stringify(values, null, 2),
          },
        });
        actions.resetForm();
      }}
    >
      {(formik: FormikProps<FormikValue>) => (
        <VStack
          as="form"
          mx="auto"
          w={{ base: "90%", md: 450 }}
          h="100vh"
          spacing={4}
          justifyContent="center"
          onSubmit={formik.handleSubmit}
        >
          <Heading fontSize={"3xl"}>Get Started!</Heading>

          <UploadingImage field={formik.getFieldProps("image")} form={formik} />

          <InputField
            label="Email Address"
            name="email"
            placeholder="Enter email address"
            type="email"
          />

          <Button
            type="submit"
            variant="outline"
            _hover={{
              bgColor: "#0872FD",
            }}
            sx={{
              width: "100%",
              height: "44px",
              bgColor: "#0449a4",
              color: "#ffffff",
            }}
          >
            Create Account
          </Button>
        </VStack>
      )}
    </Formik>
  );
}

export default OnBoarding;
