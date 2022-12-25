import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  Box,
  Button,
} from '@chakra-ui/react';
import { EmployerServiceIml } from '../../actions/employer-action';
import ReactJsAlert from "reactjs-alert";
import { Container, Alert } from 'react-bootstrap';

const EmployerSettings = () => {
  const [profile, setProfile] = useState({
    firstname: "",
    lastname: "",
    recruitmentEmail: "",
    recruitmentPhone: "",
  });
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [recruitmentEmail, setRecruitmentEmail] = useState("")
  const [recruitmentPhone, setRecruitmentPhone] = useState("")
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  useEffect(() => {
    EmployerServiceIml.getEmployerSettingProfile().then((response) => {
      // setProfile(response.data.data);
      setFirstname(response.data.data.firstname)
      setLastname(response.data.data.lastname)
      setRecruitmentEmail(response.data.data.recruitmentEmail)
      setRecruitmentPhone(response.data.data.recruitmentPhone)
    });
  }, [])

  const handleChange = (event) => {
    setProfile[event.target.name] = event.target.value;
    const newProfile = profile
    newProfile[event.target.name] = event.target.value
    setProfile(newProfile);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    EmployerServiceIml.updateEmployerSettingProfile({
      firstname: firstname,
      lastname: lastname,
      recruitmentEmail: recruitmentEmail,
      recruitmentPhone: recruitmentPhone,
    }).then((response) => {
      if (response.data.errCode != "200" && response.data.errCode) {
        setShowError(true);
        setShowSuccess(false);
      } else {
        setShowSuccess(true);
        setShowError(false);
      }
    })
    // 
  }

  const redirect = () => {
    // logout();
  }

  return (
    <>
      {showError || showSuccess ?
        <Alert
          variant={showError ? 'danger' : showSuccess ? 'success' : 'info'}>
          {showError ? 'Save fail' : showSuccess ? 'Save success' : 'info'}
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => {
                setShowError(false);
                setShowSuccess(false)
              }}
              variant={showError ? 'outline-danger' : showSuccess ? 'outline-success' : 'outline-info'}>
              Close!
            </Button>
          </div>
        </Alert>
        : null
      }
      {/* <ReactJsAlert
        type={showError ? 'error' : showSuccess ? 'success' : 'info'}  // success, warning, error, info
        title="Save"   // title you want to display
        status={showError || showSuccess}  // true or false
        button="OK"
        color="#1d36ad"
        quotes={true}
        quote={showError ? 'Save fail' : showSuccess ? 'Save success' : 'info'}
        Close={redirect}
      /> */}
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        <FormControl id="firstname">
          <FormLabel>First Name</FormLabel>
          <Input
            name="firstname"
            // onChange={(e) => handleChange(e)}
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            focusBorderColor="brand.blue"
            type="text"
            placeholder="apple"
          />
        </FormControl>
        <FormControl id="lastname">
          <FormLabel>Last Name</FormLabel>
          <Input
            name="lastname"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            focusBorderColor="brand.blue"
            type="text"
            placeholder="Apple" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Recruitment Email Address</FormLabel>
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
              name="recruitmentEmail"
              onChange={(e) => setRecruitmentEmail(e.target.value)}
              value={recruitmentEmail}
              focusBorderColor="brand.blue"
              type="email"
              placeholder="info@apple.com"
            />
          </InputGroup>
        </FormControl>
        <FormControl id="phone">
          <FormLabel>Recruitment Phone Number</FormLabel>
          <Input
            name="recruitmentPhone"
            onChange={(e) => setRecruitmentPhone(e.target.value)}
            value={recruitmentPhone}
            focusBorderColor="brand.blue"
            type="tel"
            placeholder="(408) 996–1010"
          />
        </FormControl>
      </Grid>
      <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
        <Button onClick={handleSubmit}>Update</Button>
      </Box>
    </>

  )
}

export default EmployerSettings
