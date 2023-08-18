import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Image, Stack } from "@chakra-ui/react";
import { FaUserEdit } from "react-icons/fa";
import { BsFillCloudFill } from "react-icons/bs";
import { IconButton,Text } from "@chakra-ui/react";
interface ImageUploadProps {
  field: any;
  form: {
    touched: any;
    errors: any;
    setFieldValue: (field: string, value: any) => void;
  };
}

export const UploadingImage = ({ field, form }: ImageUploadProps) => {
  const [image, upload] = useState("");
  // const [_, meta] = useField(field);

  function handleEdit() {
    form.setFieldValue(field.name, null)
    upload('')

  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    form.setFieldValue(field.name, file);
    if (file) {
      //create file reader instance
      const reader = new FileReader();
      reader.onload = (e: any) => {
        upload(e.target.result);
      };
      //convert file to base64
      reader.readAsDataURL(file);
    }
  };

  return (
    <Stack>
      <FormControl
        sx={{
          height: "250px",
          width: "250px",
          borderRadius: "50%",
          border: "1px",
          position: "relative",
          display: "flex",
          borderColor: "#d4d4d4",
          alignItems: "center",
          justifyContent: "center",
         
        }}
      >
        {image ? (
          <>
            <Image
              src={image}
              alt="image"
              w="100%"
              h="100%"
              borderRadius="50%"
              objectFit={"cover"}
            />
            <IconButton
              size={"2xl"}
              position="absolute"
              bgColor="#0449a4"
              color="white"
              _hover={{
                bgColor:'#0872FD'
              }}
              borderRadius="50%"
              p="4px"
              onClick={handleEdit}
              display={`block`}
              left={"210px"}
              bottom='40px'
            
              aria-label="image-edit"
              width="fit-content"
              textAlign={"center"}
              icon={<FaUserEdit />}
            />
          </>
        ) : (
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
             
              height:"250px",
              width:"250px",
            }}
          >
          
            <FormLabel
              height="100%"
              width="100%"
              borderRadius="50%"
              display= "flex"
              flexDirection='column'
              alignItems="center"
              justifyContent="center"
              htmlFor={field.name}
            >
                  <IconButton
              size={"3xl"}
              aria-label="image-icon"
              width="fit-content"
              textAlign={"center"}
              icon={<BsFillCloudFill />}
            />
             <Text> Add Logo</Text>

            </FormLabel>
            <Input
              type="file"
              id={field.name}
              hidden
              display="none"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Stack>
        )}
      </FormControl>
    </Stack>
  );
};

export default UploadingImage;
