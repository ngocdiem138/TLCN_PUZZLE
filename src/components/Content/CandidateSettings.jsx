import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Box,
  Button,
} from '@chakra-ui/react'

function CandidateSettings() {
  const [profile, setProfile] = useState({
    phone: "",
    fullName: "",
    avatar: "",
    email: "",
    username: "",
    locale: ""
  });
  // useEffect(() => {
  //   UserServiceIml.getUserProfile().then((response) => {
  //     setProfile(response.data.data);
  //   });
  // }, [])
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   EmployerServiceIml.responseCandidateApplication({
  //     "candidateId": candidateId,
  //     "jobPostId": jobPostId,
  //     "email": email,
  //     "subject": subject,
  //     "result": result,
  //     "note": note,
  // }).then((response)=>{
  //   if(response.data.status==200){
  //     window.location.assign(REDIRECT_BASE_URL + "/dashboard-applicants");
  //   } 
  // })
  //   // 
  // }
  return (
    <>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        <FormControl id="companyId">
          <FormLabel>Company ID</FormLabel>
          <InputGroup>
            <InputLeftAddon color="gray.500">
              <svg width="1em" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                  clipRule="evenodd"
                />
              </svg>
            </InputLeftAddon>
            <Input
              focusBorderColor="brand.blue"
              type="text"
              placeholder="apple"
            />
          </InputGroup>
        </FormControl>
        <FormControl id="companyName">
          <FormLabel>Name</FormLabel>
          <Input focusBorderColor="brand.blue" type="text" placeholder="Apple" />
        </FormControl>
        <FormControl id="emailCompany">
          <FormLabel>Email Address</FormLabel>
          <Input
            focusBorderColor="brand.blue"
            type="email"
            placeholder="info@apple.com"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Size</FormLabel>
          <NumberInput>
            <NumberInputField placeholder="6000" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </Grid>
      <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
        <Button>Update</Button>
      </Box>
    </>
  )
}

export default CandidateSettings
