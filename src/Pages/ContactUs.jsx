import {
  Box,
  Title,
  Paper,
  Text,
  Container,
  Flex,
  TextInput,
  Textarea,
  Button,
} from "@mantine/core";


const ContactUs = () => {
  return (
  
<div className="bg-white py-10">
<Text
          style={{
            fontSize: "30px",
            color: "black",
            fontWeight: "700",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Contact Us
        </Text>
        
          <Paper withBorder p="lg">
            <Flex
              direction="column"
              gap="lg"
              align="center"
              maw={300}
              mx="auto"
            >
          
            <TextInput
                placeholder="Name..."
                label="Name"
                required
                sx={{ width: "100%" }}
              />

              <TextInput
                placeholder="Email..."
                label="Email"
                required
                sx={{ width: "100%" }}
              />

              <Textarea
                placeholder="Message"
                label="Message"
                required
                sx={{ width: "100%" }}
              />
<button class="bg-gray-600 hover:bg-gray-800 text-white w-full rounded-md p-2 my-5">Submit</button>
       
      
              
             
            </Flex>
          </Paper>
   
</div>
        
  
    
  );
};

export default ContactUs;
