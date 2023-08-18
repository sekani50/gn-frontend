
import {Grid, GridItem} from "@chakra-ui/react";
const Items = () => {
    return (
        <Grid
              bgColor='#0449a4'
              p='4'
              borderTopRadius="8px"
              mt="4"
              templateColumns={"repeat(6, 1fr)"}
              gap='4'
            color='#ffffff'
              >
                <GridItem colSpan={2}>Description</GridItem>
                <GridItem colSpan={1}>Qty</GridItem>
                <GridItem colSpan={1}>Rate</GridItem>
                <GridItem colSpan={1}>Amount($)</GridItem>
               
              </Grid>
    )
}

export default Items