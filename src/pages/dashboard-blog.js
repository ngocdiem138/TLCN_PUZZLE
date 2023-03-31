import React, { useState, useEffect } from 'react'
import { Tag, TagCloseButton, TagLabel, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, FormControl, FormLabel, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack, Textarea, Select, Text, Col } from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';
import { ExperienceServiceIml } from '../actions/user-actions';
import PageWrapper from '../components/PageWrapper';

import CreatableSelect, { useCreatable } from 'react-select/creatable';
import { Alert } from 'react-bootstrap';

const Experience = () => {
    const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
    const [description, setDescription] = useState("");
    const [companyList, setCompanyList] = useState([])
    const [positionList, setPositionList] = useState([])
    const [skillList, setSkillList] = useState([])
    const [showError, setShowError] = useState(false)
    const [showError403, setShowError403] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [paragraphList, setExperienceList] = useState([]);

    const [message, setMessage] = useState("Update your paragraph experience on Puzzle! ADD NOW");
    const [selectedCompany, setSelectedCompany] = useState();
    const [selectedPosition, setSelectedPosition] = useState();
    const [selectedSkill, setSelectedSkill] = useState();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
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
    const addMore = () => {
        setMessage("")
        setExperienceList([...paragraphList, {
            id: "-1",
            title: "",
            company: "",
            employmentType: "",
            startDate: "",
            endDate: "",
            description: "",
            skills: "",
        }]);
        const skill = document.getElementById("skills")
        if (skill) {
            skill.value = ""
        }

    }
    const saveOrUpdate = () => {
        paragraphList.map((paragraph) => {

            paragraph.startDate != null && paragraph.startDate.split(' ').length == 1 ? paragraph.startDate += " 00:00:00" : paragraph.startDate


            paragraph.endDate != null && paragraph.endDate.split(' ').length == 1 ? paragraph.endDate += " 00:00:00" : paragraph.endDate

            paragraph.id == '-1' && paragraph.title != "" ? ExperienceServiceIml.createExperience(paragraph).then((response) => {
                if (response.data.errCode == "200" || response.data.errCode == null) {
                    setShowError(false);
                    setShowSuccess(true);
                } else {
                    setShowSuccess(false);
                    setShowError(true);
                }
            }) : ExperienceServiceIml.updateExperience(paragraph).then((response) => {
                if (response.data.errCode == "200" || response.data.errCode == null) {
                    setShowError(false);
                    setShowSuccess(true);
                } else {
                    setShowSuccess(false);
                    setShowError(true);
                }
            })
        });
    }

    const handleChange = (e, id) => {
        let { name, value } = e.target;
        if (name == "startDate") {
            setStartDate(-1)
            value = value + " 00:00:00";
        } else if (name == "endDate") {
            setEndDate(-1)
            value = value + " 00:00:00";
        }
        const updatedExperienceList2 = paragraphList.map((paragraph) => (
            paragraph.id === id && startDate != -1 ? Object.assign(paragraph, { ["startDate"]: paragraph.endDate + " 00:00:00" }) : paragraph
        ));
        setExperienceList(updatedExperienceList2);
        const updatedExperienceList1 = paragraphList.map((paragraph) => (
            paragraph.id === id && endDate != -1 ? Object.assign(paragraph, { ["endDate"]: paragraph.endDate + " 00:00:00" }) : paragraph
        ));
        setExperienceList(updatedExperienceList1);
        const updatedExperienceList = paragraphList.map((paragraph) => (
            paragraph.id === id ? Object.assign(paragraph, { [name]: value }) : paragraph
        ));
        setExperienceList(updatedExperienceList);
    }

    const handleSelectChange = (name, value, id) => {
        const updatedExperienceList = paragraphList.map((paragraph) => (
            paragraph.id === id ? Object.assign(paragraph, { [name]: value }) : paragraph
        ));
        setExperienceList(updatedExperienceList);
    }

    const handleSkill = (e, id) => {
        e.preventDefault();
        const { name, value } = e.target[0];
        const updatedExperienceList = paragraphList.map((paragraph) => (
            paragraph.id === id ? Object.assign(paragraph, { [name]: paragraph.skills + value + ',' }) : paragraph
        ));

        setExperienceList(updatedExperienceList);
    }
    const getSkill = (skills) => {
        let arr = skills ? skills.split(',') : [];
        let skillOjectList = []
        arr.forEach((element) => {
            skillOjectList = [...skillOjectList, { value: element, label: element }]
        })
        return skillOjectList;
    }

    const stringSkills = (skills) => {
        let skillNameList = []
        skills.forEach((element) => {
            skillNameList = [...skillNameList, element.label]
        })
        return skillNameList.join(',');
    }

    const deleteExperience = (id) => {
        setExperienceList(paragraphList.filter((elem) => elem.id !== id))
        ExperienceServiceIml.deleteExperience(id).then((response) => {
            if (response.data.errCode == "200" || response.data.errCode == null) {
                setShowError(false);
                setShowSuccess(true);
            } else {
                setShowSuccess(false);
                setShowError(true);
            }
        })
    }

    const [skill, setSkill] = useState("");

    const deleteSkill = (skill, id) => {
        const updatedExperienceList = paragraphList.map((paragraph) => (
            paragraph.id === id ? Object.assign(paragraph, { ["skills"]: paragraph.skills.replace(skill + ',', '') }) : paragraph
        ));

        setExperienceList(updatedExperienceList);
    }

    return (
        <>
            <PageWrapper
                headerConfig={{
                    button: "profile",
                    isFluid: true,
                    bgClass: "bg-default",
                    reveal: false,
                }}
            >
                <div
                    className="dashboard-main-container mt-24 mt-lg-31"
                    id="dashboard-body"
                >
                    <div className="container">
                        <div className="mb-15 mb-lg-23">
                            <div className="row">
                                <div className="col-xxxl-9 px-lg-13 px-6">
                                    <h5 className="font-size-6 font-weight-semibold mb-11">
                                        Add new blog
                                    </h5>
                                    <div className="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13">
                                        {paragraphList == 0 ? null : <h3>{message}</h3>}
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
                                        <FormControl id="name">
                                            <FormLabel>Blog title</FormLabel>
                                            <Input
                                                onChange={(e) => setName(e.target.value)}
                                                value={name}
                                                focusBorderColor="brand.blue"
                                                type="text"
                                                placeholder="IT DEV" />
                                        </FormControl>
                                        <FormControl id="name">
                                            <FormLabel>Blog content</FormLabel>
                                        </FormControl>
                                        <Accordion allowToggle defaultIndex={[0]}>
                                            {
                                                paragraphList.map((paragraph, index) => (
                                                    <AccordionItem key={index} background={"white"} margin={"10px 0px"} >
                                                        <h2>
                                                            <AccordionButton className='main-color'>
                                                                <Box flex='1' textAlign='left'>
                                                                    <p fontSize={25} style={{ "font-weight": "600" }} >{paragraph.title ? paragraph.title : "Title"}</p>
                                                                </Box>
                                                                <AccordionIcon />
                                                            </AccordionButton>
                                                        </h2>
                                                        <AccordionPanel pb={4} minHeight={500}>
                                                            <HStack spacing={30} paddingTop={10}>
                                                                <FormControl width="30%">
                                                                    <FormLabel>Paragraph title</FormLabel>
                                                                    <Input
                                                                        onChange={(e) => handleChange(e, paragraph.title)}
                                                                        value={paragraph.title}
                                                                        focusBorderColor="brand.blue"
                                                                        type="text"
                                                                        placeholder="Google" />
                                                                </FormControl>
                                                                <FormControl width="30%">
                                                                    <CreatableSelect
                                                                        isClearable={true}
                                                                        isSearchable
                                                                        onChange={(e) => { handleSelectChange("company", e.label, paragraph.id); setSelectedCompany(e); }}
                                                                        value={{ value: paragraph.company, label: paragraph.company }}
                                                                        options={companyList} />
                                                                </FormControl>
                                                                <Select width="30%" value={paragraph.employmentType} onChange={(e) => handleChange(e, paragraph.id)} name='employmentType' variant='filled' placeholder='Employment Type'>
                                                                    <option value='Full-time'>Full-time</option>
                                                                    <option value='Part-time'>Part-time</option>
                                                                    <option value='Internship'>Internship</option>
                                                                    <option value='Freelance'>Freelance</option>
                                                                </Select>
                                                            </HStack>
                                                            <FormControl id="image">
                                                                <FormLabel>Image</FormLabel>
                                                                <Box h={60} w={60} margin='30px auto' padding={3} overflow="hidden">
                                                                    <Image
                                                                        w="full"
                                                                        h="full"
                                                                        objectFit="avatar"
                                                                        src={avatarImage ? avatarImage : AvatarImg}
                                                                        alt="Avatar"
                                                                        style={{ "border-radius": "50%", "border": "6px solid white", "box-shadow": "0px 0px 0px 6px gray" }}
                                                                    />
                                                                    <Button
                                                                        onClick={openChooseFile}
                                                                        position="absolute"
                                                                        top={60}
                                                                        style={{ "marginRight": "50%" }}
                                                                        variant="ghost"
                                                                    >
                                                                        <svg width="1.2em" fill="currentColor" viewBox="0 0 20 20">
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                                                                            />
                                                                        </svg>
                                                                        {/* <Text ml={2}>Change</Text> */}
                                                                        <input ref={inputRef} type="file" onChange={handleChangeAvatar} hidden />
                                                                    </Button>
                                                                    <Modal isOpen={isOpen} onClose={onClose}>
                                                                        <ModalOverlay />
                                                                        <ModalContent>
                                                                            <ModalHeader>Something went wrong</ModalHeader>
                                                                            <ModalCloseButton />
                                                                            <ModalBody>
                                                                                <Text>File not supported!</Text>
                                                                                <HStack mt={1}>
                                                                                    <Text color="brand.cadet" fontSize="sm">
                                                                                        Supported types:
                                                                                    </Text>
                                                                                    <Badge colorScheme="green">PNG</Badge>
                                                                                    <Badge colorScheme="green">JPG</Badge>
                                                                                    <Badge colorScheme="green">JPEG</Badge>
                                                                                </HStack>
                                                                            </ModalBody>

                                                                            <ModalFooter>
                                                                                <Button onClick={onClose}>Close</Button>
                                                                            </ModalFooter>
                                                                        </ModalContent>
                                                                    </Modal>
                                                                </Box>
                                                            </FormControl>
                                                            <HStack spacing={30} mt={6}>
                                                                <FormControl width="50%">
                                                                    <FormLabel htmlFor='startDate'>Start Date</FormLabel>
                                                                    <Input
                                                                        className='input-field'
                                                                        width="90%"
                                                                        value={paragraph.startDate ? paragraph.startDate.split(' ')[0] : null}
                                                                        onChange={(e) => handleChange(e, paragraph.id)}
                                                                        name='startDate'
                                                                        id='startDate'
                                                                        type='date'
                                                                        variant='filled'
                                                                        placeholder='Start Date' />
                                                                </FormControl>

                                                                <FormControl width="50%">
                                                                    <FormLabel htmlFor='endDate'>End Date</FormLabel>
                                                                    <Input
                                                                        className='input-field'
                                                                        width="90%"
                                                                        value={paragraph.endDate ? paragraph.endDate.split(' ')[0] : null}
                                                                        onChange={(e) => handleChange(e, paragraph.id)}
                                                                        name='endDate'
                                                                        id='endDate'
                                                                        type='date'
                                                                        variant='filled'
                                                                        placeholder='Start Date' />
                                                                </FormControl>

                                                            </HStack>
                                                            <HStack spacing={30} mt={6}>
                                                                <FormControl id="description" style={{ "marginTop": "2vh" }}>
                                                                    <FormLabel>Description</FormLabel>
                                                                    <ReactQuill
                                                                        style={{ width: "100%", margin: "0px", maxWidth: "100%" }}
                                                                        theme="snow"
                                                                        onChange={(e) => handleChange(e, paragraph.description)}
                                                                        value={paragraph.description}
                                                                        modules={modules}
                                                                        formats={formats}
                                                                        placeholder="Write about company ....."
                                                                    />
                                                                </FormControl>
                                                            </HStack>

                                                            {/* <FormControl mt={6}> */}
                                                            <HStack spacing={30}>
                                                                <FormControl width="95%">
                                                                    <FormLabel htmlFor='skill'>Skill</FormLabel>
                                                                    <CreatableSelect
                                                                        maxMenuHeight={100}
                                                                        isMulti
                                                                        isClearable={true}
                                                                        isSearchable
                                                                        onChange={(e) => { handleSelectChange("skills", stringSkills(e), paragraph.id); setSelectedSkill(e); }}
                                                                        value={getSkill(paragraph.skills)}
                                                                        options={skillList} />
                                                                    {/* <Input className='input-field' width="95%" onChange={(e) => setSkill(e.target.value)} value={skill} name='skills' id='skills' type='text' variant='filled' placeholder='Skill' /> */}
                                                                </FormControl>
                                                            </HStack>
                                                            {/* </FormControl> */}

                                                            <Button id="delete-button btn-danger" rightIcon={<MdDelete />} onClick={() => deleteExperience(paragraph.id)} mt={3} colorScheme={'red'}>Xóa</Button>

                                                        </AccordionPanel>
                                                    </AccordionItem>
                                                ))
                                            }
                                        </Accordion>
                                        <Button className='action-button btn-green' marginRight={"10vw"} colorScheme={'purple'} my={5} onClick={addMore}>Add new paragraph</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    )
};

export default Experience;