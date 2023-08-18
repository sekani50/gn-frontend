import {
  Box,
  Heading,
  Grid,
  GridItem,
  Button,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { Formik, FormikProps } from "formik";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";
import { InvoiceValues } from "../../types";
import InvoiceField from "./invoicefield/invoiceField";
import UploadingImage from "../inputfield/uploadingImage";
import InvoiceInput from "./invoiceinput/invoiceInput";
import Items from "./items/items";
const CreateInvoice = () => {
  const { state } = useLocation();

  console.log(state?.data);
  return (
    <Box w="100%" h="100%">
      <Box
        bgColor="#0449a4"
        display="flex"
        color="#ffffff"
        py={{ base: "1rem", md: "2rem", lg: "2rem" }}
        px={{ base: "20px", md: "40px", lg: "48px" }}
      >
        <Heading justifySelf="flex-start" fontSize="xl">
          Invoice Generator
        </Heading>
      </Box>

      <Formik
        initialValues={{
          image: null,
          fullname: "",
            faculty: "",
          dept: "",
          date: "",
          duedate: "",
          terms: "",
          ponumber: "",
        }}
        validationSchema={Yup.object({
          invoiceFrom: Yup.string().required("Field is required"),
        })}
        onSubmit={(values, actions) => {
          console.log(JSON.stringify(values, null, 2));
          actions.resetForm();
        }}
      >
        {(formik: FormikProps<InvoiceValues>) => (
          <Grid
            as="form"
            templateColumns={"repeat(6, 1fr)"}
            p={{ base: "2rem", md: "4rem" }}
            onSubmit={formik.handleSubmit}
          >
            <GridItem
              as="div"
              colSpan={5}
              width="100%"
              border="1px"
              borderRadius="8px"
              p={4}
            >
              <UploadingImage
                field={formik.getFieldProps("image")}
                form={formik}
              />
              <Stack
                as="div"
                w="100%"
                display="flex"
                mt="4"
                justifyContent={"space-between"}
                flexDirection={{ base: "column", xl: "row" }}
              >
                <VStack as="div" spacing={4}>
                  <InvoiceField
                    label="Full Name"
                    name="fullname"
                    placeholder="Enter your full name"
                    type="text"
                  />
                  <Stack
                    as="div"
                    display="flex"
                    w="100%"
                    flexDirection={"row"}
                    gap={4}
                  >
                    <InvoiceField
                      label="Faculty"
                      name="faculty"
                      placeholder="Faculty"
                      type="text"
                    />
                    <InvoiceField
                      label="Department"
                      name="dept"
                      placeholder="Department"
                      type="text"
                    />
                  </Stack>
                </VStack>

                <VStack
                  as="div"
                  display="flex"
                  w={{ base: "100%", xl: '350px'}}
                  flexDirection={{ base: "row", xl: "column" }}
                  justifySelf={"flex-end"}
                >
                  <VStack as="div" w={{ base: "100%" ,xl: '100%' }}>
                    <InvoiceInput
                      label="Date"
                      name="date"
                      placeholder=""
                      type="date"
                    />
                   
                  </VStack>
                  <VStack as="div" w={{ base: "100%", xl:"100%"}}>
                    <InvoiceInput
                      label="Due Date"
                      name="duedate"
                      placeholder=""
                      type="date"
                    />
                 
                  </VStack>
                </VStack>
              </Stack>
             <Items/>
        
            </GridItem>
            <GridItem as="div" colSpan={1} width="100%" px="10px" py="20px">
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
                Download Pdf
              </Button>
            </GridItem>
          </Grid>
        )}
      </Formik>
    </Box>
  );
};

export default CreateInvoice;
