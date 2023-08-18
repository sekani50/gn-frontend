import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import OnBoarding from "./components/onboarding/onBoarding";
import CreateInvoice from "./components/createinvoice/createInvoice";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid h="100%">
        <ColorModeSwitcher
          position="absolute"
          right="30px"
          top={{base:"10px",md:"20px"}}
          justifySelf="flex-end"
        />
        <Router>
          <Routes>
            {/*    ONBOARDING PAGE */}

            <Route path="/" element={<OnBoarding />} />
             {/*    INVOICE PAGE */}
            <Route path="/invoice" element={<CreateInvoice />} />
          </Routes>
        </Router>
      </Grid>
    </Box>
  </ChakraProvider>
);
