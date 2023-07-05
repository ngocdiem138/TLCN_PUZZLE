import React, { useState, useEffect } from 'react';
import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react';
import { Box, Button } from '@chakra-ui/react'
import { UserServiceIml } from '../../actions/user-actions';
import Cover from '../Cover';
import ReactJsAlert from "reactjs-alert";
import { Container, Alert } from 'react-bootstrap';
import { logout } from '../../actions/auth-actions';

const AccountSettings = () => {
  const [profile, setProfile] = useState({
    phone: "",
    fullName: "",
    avatar: "",
    email: "",
    username: "",
    locale: ""
  });
  const [fullName, setFullName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [avatar, setAvatar] = useState("")
  const [showError, setShowError] = useState(false)
  const [showError403, setShowError403] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  useEffect(() => {
    UserServiceIml.getUserProfile().then((response) => {
      if (response.data.errCode == "UNAUTHORIZED_ERROR") {
        setShowError403(true);
      } else {
        setFullName(response.data.data.fullName);
        setUsername(response.data.data.username);
        setEmail(response.data.data.email);
        setPhone(response.data.data.phone);
        setAvatar(response.data.data.avatar);
      }
    });
  }, [])

  const handleChange = (event) => {
    const newProfile = profile
    newProfile[event.target.name] = event.target.value
    setProfile(newProfile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    UserServiceIml.updateUserSettingProfile({
      fullName: fullName,
      username: username,
      phone: phone,
    }).then((response) => {
      if (response.data.errCode != "200") {
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
    logout();
  }

  return (
    <>
      <ReactJsAlert
        type="info"   // success, warning, error, info
        title="Session has expired"   // title you want to display
        status={showError403}  // true or false
        button="OK"
        color="#1d36ad"
        quotes={true}
        quote="Unfortunately your session has expired and you have been logged out. Please log in again"
        Close={redirect}   // callback method for hide
      />
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
      <FormControl id="avatar">
        <FormLabel>Avatar</FormLabel>
        <Cover url={avatar} />
      </FormControl>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >

        <FormControl id="fullName">
          <FormLabel>Full Name</FormLabel>
          <Input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            focusBorderColor="brand.blue"
            type="text"
            placeholder="Le Thi Ngoc Diem" />
        </FormControl>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            focusBorderColor="brand.blue"
            type="text"
            placeholder="diem cute" />
        </FormControl>
        <FormControl id="phone">
          <FormLabel>Phone Number</FormLabel>
          <Input
            onChange={(e) => setPhone(e.target.value)}
            focusBorderColor="brand.blue"
            type="tel"
            placeholder="(408) 996–1010"
            value={phone}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email Address</FormLabel>
          <Input
            disabled={true}
            value={email}
            focusBorderColor="brand.blue"
            type="email"
            placeholder="tcook@apple.com"
          />
        </FormControl>
      </Grid>

      <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
        <Button onClick={handleSubmit}>Update</Button>
      </Box>
    </>
  )
}

export default AccountSettings
