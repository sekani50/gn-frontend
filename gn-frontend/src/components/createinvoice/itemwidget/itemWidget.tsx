import { Grid, GridItem } from "@chakra-ui/react";
const ItemWidget = () => {
  return (
    <Grid p="4" mt="2" templateColumns={"repeat(6, 1fr)"} gap="4">
      <GridItem colSpan={2}>
        
      </GridItem>
      <GridItem colSpan={1}>Qty</GridItem>
      <GridItem colSpan={1}>Rate</GridItem>
      <GridItem colSpan={1}>Amount($)</GridItem>
    </Grid>
  );
};
export default ItemWidget;
