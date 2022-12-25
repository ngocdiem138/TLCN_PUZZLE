import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Box,
  Button,
} from '@chakra-ui/react';
import { Alert } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import { CandidateServiceIml } from '../../actions/candidate-action';
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CandidateSettings = () => {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];




  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [introduction, setIntroduction] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [workStatus, setWorkStatus] = useState("");
  const [blind, setBlind] = useState(false);
  const [deaf, setDeaf] = useState(false);
  const [communicationDis, setCommunicationDis] = useState(false);
  const [handDis, setHandDis] = useState(false);
  const [labor, setLabor] = useState(false);
  const [detailDis, setDetailDis] = useState("");
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [quill, setQuill] = useState(false);
  if (typeof document !== `undefined`) {
    setQuill(true);
  }
  useEffect(() => {
    CandidateServiceIml.getCandidateSettingProfile().then((response) => {
      setFirstName(response.data.data.firstName);
      setLastName(response.data.data.lastName);
      setIntroduction(response.data.data.introduction);
      setEducationLevel(response.data.data.educationLevel);
      setWorkStatus(response.data.data.workStatus);
      setBlind(response.data.data.blind);
      setDeaf(response.data.data.deaf);
      setCommunicationDis(response.data.data.communicationDis);
      setHandDis(response.data.data.handDis);
      setLabor(response.data.data.labor);
      setDetailDis(response.data.data.detailDis);
    });
  }, [])
  const handleSubmit = (event) => {
    event.preventDefault();
    CandidateServiceIml.updateCandidateSettingProfile({
      firstName: firstName,
      lastName: lastName,
      introduction: introduction,
      educationLevel: educationLevel,
      workStatus: workStatus,
      blind: blind,
      deaf: deaf,
      communicationDis: communicationDis,
      handDis: handDis,
      labor: labor,
      detailDis: detailDis,
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

  const updateIntroduction = (value) => {
    setIntroduction(value);
  };
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
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        <FormControl id="firstName">
          <FormLabel>First Name</FormLabel>
          <Input
            name="firstName"
            // onChange={(e) => handleChange(e)}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            focusBorderColor="brand.blue"
            type="text"
            placeholder="apple"
          />
        </FormControl>
        <FormControl id="lastName">
          <FormLabel>Last Name</FormLabel>
          <Input
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            focusBorderColor="brand.blue"
            type="text"
            placeholder="Apple" />
        </FormControl>
        <FormControl id="educationLevel">
          <FormLabel>Education Level</FormLabel>
          <Input
            name="educationLevel"
            onChange={(e) => setEducationLevel(e.target.value)}
            value={educationLevel}
            focusBorderColor="brand.blue"
            type="text"
            placeholder="Master" />
        </FormControl>
        <FormControl id="workStatus">
          <FormLabel>Work Status</FormLabel>
          <Input
            name="workStatus"
            onChange={(e) => setWorkStatus(e.target.value)}
            value={workStatus}
            focusBorderColor="brand.blue"
            type="text"
            placeholder="unemployment" />
        </FormControl>
        <FormControl>
          <FormLabel>Blind</FormLabel>
          <select name="blind" id="blind" class="chakra-input css-1hsm0tt" value={blind}
            onChange={(e) => setBlind(e.target.value)} >
            <option value="false">Not Allow</option>
            <option value="true">Allow</option>
          </select>
        </FormControl>
        <FormControl>
          <FormLabel>Deaf</FormLabel>
          <select name="deaf" id="deaf" class="chakra-input css-1hsm0tt" value={deaf}
            onChange={(e) => setDeaf(e.target.value)} >
            <option value="false">Not Allow</option>
            <option value="true">Allow</option>
          </select>
        </FormControl>
        <FormControl>
          <FormLabel>Communication Dis</FormLabel>
          <select name="communicationDis" id="communicationDis" class="chakra-input css-1hsm0tt" value={communicationDis}
            onChange={(e) => setCommunicationDis(e.target.value)} >
            <option value="false">Not Allow</option>
            <option value="true">Allow</option>
          </select>
        </FormControl>
        <FormControl>
          <FormLabel>Labor</FormLabel>
          <select name="labor" id="labor" class="chakra-input css-1hsm0tt" value={labor}
            onChange={(e) => setLabor(e.target.value)} >
            <option value="false">Not Allow</option>
            <option value="true">Allow</option>
          </select>
        </FormControl>
        <FormControl>
          <FormLabel>Hand Dis</FormLabel>
          <select name="handDis" id="handDis" class="chakra-input css-1hsm0tt" value={handDis}
            onChange={(e) => setHandDis(e.target.value)} >
            <option value="false">Not Allow</option>
            <option value="true">Allow</option>
          </select>
        </FormControl>
        <FormControl id="detailDis">
          <FormLabel>Detail Dis</FormLabel>
          <Input
            name="detailDis"
            onChange={(e) => setDetailDis(e.target.value)}
            value={detailDis}
            focusBorderColor="brand.blue"
            type="text"
            placeholder="small" />
        </FormControl>
      </Grid>
      <FormControl id="introduction" style={{ "marginTop": "2vh" }}>
        <FormLabel>Introduction</FormLabel>
          <ReactQuill
            style={{ width: "100%", margin: "0px", maxWidth: "100%" }}
            theme="snow"
            onChange={(e) => setIntroduction(e)}
            value={introduction}
            modules={modules}
            formats={formats}
            placeholder="Write about yourself ....."
          /> 
      </FormControl>
      <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
        <Button onClick={handleSubmit}>Update</Button>
      </Box>
    </>
  )
}

export default CandidateSettings
