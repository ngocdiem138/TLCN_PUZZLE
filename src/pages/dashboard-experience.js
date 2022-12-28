import React, { useState, useEffect } from 'react'
import { Tag, TagCloseButton, TagLabel, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, FormControl, FormLabel, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack, Textarea, Select, Text, Col } from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';
import { ExperienceServiceIml } from '../actions/user-actions';
import PageWrapper from '../components/PageWrapper';
import SidebarDashboard from '../components/SidebarDashboard';

import CreatableSelect, { useCreatable } from 'react-select/creatable';
import { JobPostServiceIml } from '../actions/user-actions';
import { SkillServiceIml } from '../actions/admin-actions';
import { Alert } from 'react-bootstrap';

// import './Experience.css'

const Experience = () => {

    const [companyList, setCompanyList] = useState([])
    const [positionList, setPositionList] = useState([])
    const [skillList, setSkillList] = useState([])
    const [showError, setShowError] = useState(false)
    const [showError403, setShowError403] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    useEffect(() => {
        JobPostServiceIml.getAllCompany().then((response) => {
            if (response.data.data) {
                let companyList1 = []
                response.data.data.forEach(element => {
                    companyList1 = [...companyList1, { value: element.name, label: element.name }]
                });
                setCompanyList(companyList1);
            }
            else {

            }
        });
        SkillServiceIml.getAllExtraInfoByType("position").then((response) => {
            if (response.data.data) {
                let positionList1 = []
                response.data.data.forEach(element => {
                    positionList1 = [...positionList1, { value: element.name, label: element.name }]
                });
                setPositionList(positionList1);
            }
            else {

            }
        });
        SkillServiceIml.getAllExtraInfoByType("skill").then((response) => {
            if (response.data.data) {
                let skillList1 = []
                response.data.data.forEach(element => {
                    skillList1 = [...skillList1, { value: element.id, label: element.name }]
                });
                setSkillList(skillList1);
            }
            else {
            }
        });

    }, []);


    const [experienceList, setExperienceList] = useState([]);
    useEffect(() => {
        ExperienceServiceIml.getExperienceByCandidate().then((response) => {
            setExperienceList(response.data.data)
            setMessage('')
        });
    }, []);
    const [message, setMessage] = useState("Update your work experience on Puzzle! ADD NOW");
    const [selectedCompany, setSelectedCompany] = useState();
    const [selectedPosition, setSelectedPosition] = useState();
    const [selectedSkill, setSelectedSkill] = useState();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const addMore = () => {
        setMessage("")
        setExperienceList([...experienceList, {
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
        experienceList.map((work) => (
            work.id == '-1' && work.title != "" ? ExperienceServiceIml.createExperience(work).then((response) => {
                if (response.data.errCode == "200" || response.data.errCode == null) {
                    setShowError(false);
                    setShowSuccess(true);
                } else {
                    setShowSuccess(false);
                    setShowError(true);
                }
            }) : ExperienceServiceIml.updateExperience(work).then((response) => {
                if (response.data.errCode == "200" || response.data.errCode == null) {
                    setShowError(false);
                    setShowSuccess(true);
                } else {
                    setShowSuccess(false);
                    setShowError(true);
                }
            })
        ));
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
        const updatedExperienceList2 = experienceList.map((work) => (
            work.id === id && startDate != -1 ? Object.assign(work, { ["startDate"]: work.endDate + " 00:00:00" }) : work
        ));
        setExperienceList(updatedExperienceList2);
        const updatedExperienceList1 = experienceList.map((work) => (
            work.id === id && endDate != -1 ? Object.assign(work, { ["endDate"]: work.endDate + " 00:00:00" }) : work
        ));
        setExperienceList(updatedExperienceList1);
        const updatedExperienceList = experienceList.map((work) => (
            work.id === id ? Object.assign(work, { [name]: value }) : work
        ));
        setExperienceList(updatedExperienceList);
    }

    const handleSelectChange = (name, value, id) => {
        const updatedExperienceList = experienceList.map((work) => (
            work.id === id ? Object.assign(work, { [name]: value }) : work
        ));

        const updatedExperienceList2 = experienceList.map((work) => (
            work.id === id && startDate != -1 ? Object.assign(work, { ["startDate"]: work.endDate + " 00:00:00" }) : work
        ));
        setExperienceList(updatedExperienceList2);
        const updatedExperienceList1 = experienceList.map((work) => (
            work.id === id && endDate != -1 ? Object.assign(work, { ["endDate"]: work.endDate + " 00:00:00" }) : work
        ));
        setExperienceList(updatedExperienceList1);
        setExperienceList(updatedExperienceList);
    }

    const handleSkill = (e, id) => {
        e.preventDefault();
        const { name, value } = e.target[0];
        const updatedExperienceList = experienceList.map((work) => (
            work.id === id ? Object.assign(work, { [name]: work.skills + value + ',' }) : work
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
        setExperienceList(experienceList.filter((elem) => elem.id !== id))
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
        const updatedExperienceList = experienceList.map((work) => (
            work.id === id ? Object.assign(work, { ["skills"]: work.skills.replace(skill + ',', '') }) : work
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
                                        Experience List
                                    </h5>
                                    {experienceList.size == 0 ? null : <h3>{message}</h3>}
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
                                    <Accordion allowToggle defaultIndex={[0]}>
                                        {
                                            experienceList.map((work, index) => (
                                                <AccordionItem key={index} background={"#a3e0e0"}>
                                                    <h2>
                                                        <AccordionButton className='main-color'>
                                                            <Box flex='1' textAlign='left'>
                                                                <h3 fontWeight={'medium'}>{work.title ? work.title : "Title"}</h3>
                                                            </Box>
                                                            <AccordionIcon />
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel pb={4} minHeight={500}>
                                                        <HStack spacing={30} paddingTop={10}>
                                                            <FormControl width="30%">
                                                                <CreatableSelect
                                                                    isClearable={true}
                                                                    isSearchable
                                                                    onChange={(e) => { handleSelectChange("title", e.label, work.id); setSelectedPosition(e); }}
                                                                    value={selectedPosition ? selectedPosition : { value: work.title, label: work.title }}
                                                                    options={positionList} />
                                                            </FormControl>
                                                            <FormControl width="30%">
                                                                <CreatableSelect
                                                                    isClearable={true}
                                                                    isSearchable
                                                                    onChange={(e) => { handleSelectChange("company", e.label, work.id); setSelectedCompany(e); }}
                                                                    value={selectedCompany ? selectedCompany : { value: work.company, label: work.company }}
                                                                    options={companyList} />
                                                            </FormControl>
                                                            <Select width="30%" value={work.employmentType} onChange={(e) => handleChange(e, work.id)} name='employmentType' variant='filled' placeholder='Employment Type'>
                                                                <option value='Full-time'>Full-time</option>
                                                                <option value='Part-time'>Part-time</option>
                                                                <option value='Internship'>Internship</option>
                                                                <option value='Freelance'>Freelance</option>
                                                            </Select>
                                                        </HStack>

                                                        <HStack spacing={30} mt={6}>
                                                            <FormControl width="50%">
                                                                <FormLabel htmlFor='startDate'>Start Date</FormLabel>
                                                                <Input
                                                                    className='input-field'
                                                                    width="90%"
                                                                    value={work.startDate ? work.startDate.split(' ')[0] : null}
                                                                    onChange={(e) => handleChange(e, work.id)}
                                                                    name='startDate'
                                                                    id='startDate'
                                                                    type='date'
                                                                    placeholder='Start Date' />
                                                            </FormControl>

                                                            <FormControl width="50%">
                                                                <FormLabel htmlFor='endDate'>End Date</FormLabel>
                                                                <Input
                                                                    className='input-field'
                                                                    width="90%"
                                                                    value={work.endDate ? work.endDate.split(' ')[0] : null}
                                                                    onChange={(e) => handleChange(e, work.id)}
                                                                    name='endDate'
                                                                    id='endDate'
                                                                    type='date'
                                                                    variant='filled'
                                                                    placeholder='Start Date' />
                                                            </FormControl>

                                                        </HStack>
                                                        <HStack spacing={30} mt={6}>
                                                            <FormControl mt={3}>
                                                                <FormLabel htmlFor='description'>Description</FormLabel>
                                                                <Textarea className='input-field' width="95%" value={work.description} onChange={(e) => handleChange(e, work.id)} name='description' id='description' variant='filled' placeholder='Description...' />
                                                            </FormControl>
                                                        </HStack>

                                                        {/* <FormControl mt={6}> */}
                                                        <HStack spacing={30}>
                                                            <FormControl width="95%">
                                                                <FormLabel  htmlFor='skill'>Skill</FormLabel>
                                                                <CreatableSelect
                                                                    isMulti
                                                                    isClearable={true}
                                                                    isSearchable
                                                                    onChange={(e) => { handleSelectChange("skills", stringSkills(e), work.id); setSelectedSkill(e); }}
                                                                    value={selectedSkill ? selectedSkill : getSkill(work.skills)}
                                                                    options={skillList} />
                                                                {/* <Input className='input-field' width="95%" onChange={(e) => setSkill(e.target.value)} value={skill} name='skills' id='skills' type='text' variant='filled' placeholder='Skill' /> */}
                                                            </FormControl>
                                                        </HStack>
                                                        {/* </FormControl> */}

                                                        <Button id="delete-button btn-danger" rightIcon={<MdDelete />} onClick={() => deleteExperience(work.id)} mt={3} colorScheme={'red'}>Xóa</Button>

                                                    </AccordionPanel>
                                                </AccordionItem>
                                            ))
                                        }
                                    </Accordion>
                                    <Button className='action-button btn-green' marginRight={"10vw"} colorScheme={'purple'} my={5} onClick={addMore}>Add More</Button>
                                    <Button className='action-button btn-gray' marginLeft={"10vw"} colorScheme={'purple'} my={5} onClick={saveOrUpdate}>Save</Button>
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