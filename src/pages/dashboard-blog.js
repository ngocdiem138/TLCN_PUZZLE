import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Tag, TagCloseButton, TagLabel, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, FormControl, FormLabel, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack, Textarea, Select, Text, Col } from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';
import { ParagraphServiceIml, UserServiceIml } from '../actions/user-actions';
import PageWrapper from '../components/PageWrapper';

import CreatableSelect, { useCreatable } from 'react-select/creatable';
import { Alert } from 'react-bootstrap';
import Cover from '../components/Cover';
import { API_BASE_URL } from '../utils/constants/url';

const Paragraph = () => {
    const quillRef = useRef();
    const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [paragraphImage, setParagraphImage] = useState("");
    const [companyList, setCompanyList] = useState([])
    const [positionList, setPositionList] = useState([])
    const [skillList, setSkillList] = useState([])
    const [showError, setShowError] = useState(false)
    const [showError403, setShowError403] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [paragraphList, setParagraphList] = useState([]);

    const [message, setMessage] = useState("Update your paragraph experience on Puzzle! ADD NOW");
    const [selectedCompany, setSelectedCompany] = useState();
    const [selectedPosition, setSelectedPosition] = useState();
    const [selectedSkill, setSelectedSkill] = useState();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const modules = useMemo(() => ({
        toolbar: {
            container: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                ],
                [{ 'align': [] }],
                ["link", "image"],
                ["clean"],
                [{ 'color': [] }],
            ],
            handlers: {
                image: () => {
                    const input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    input.setAttribute('accept', 'image/*');
                    input.setAttribute('multiple', 'multiple');
                    input.click();
                    input.onchange = async () => {
                        Array.from(input.files).forEach((item) => {
                            const formData = new FormData();
                            formData.append('file', item);
                            formData.append('subjectId', '123');
                            UserServiceIml.uploadUserAvatar(formData).then(({ data }) => {
                                console.log('data', data);
                                const quill = quillRef?.current?.getEditor();
                                console.log('data', quill);
                                const cursorPosition = quill.getSelection();
                                const link = data.path;
                                quill.insertEmbed(cursorPosition, 'image', link);
                                quill.setSelection(cursorPosition + 1);
                            });
                        });
                    };
                },
            },
        },
        clipboard: {
            matchVisual: false,
        },
    }), []);

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
        setParagraphList([...paragraphList, {
            id: "-1",
            title: "",
            company: "",
            positionImage: "",
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
            paragraph.id == '-1' && paragraph.title != "" ? ParagraphServiceIml.createParagraph(paragraph).then((response) => {
                if (response.data.errCode == "200" || response.data.errCode == null) {
                    setShowError(false);
                    setShowSuccess(true);
                } else {
                    setShowSuccess(false);
                    setShowError(true);
                }
            }) : ParagraphServiceIml.updateParagraph(paragraph).then((response) => {
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
        const updatedParagraphList2 = paragraphList.map((paragraph) => (
            paragraph.id === id && startDate != -1 ? Object.assign(paragraph, { ["startDate"]: paragraph.endDate + " 00:00:00" }) : paragraph
        ));
        setParagraphList(updatedParagraphList2);
        const updatedParagraphList1 = paragraphList.map((paragraph) => (
            paragraph.id === id && endDate != -1 ? Object.assign(paragraph, { ["endDate"]: paragraph.endDate + " 00:00:00" }) : paragraph
        ));
        setParagraphList(updatedParagraphList1);
        const updatedParagraphList = paragraphList.map((paragraph) => (
            paragraph.id === id ? Object.assign(paragraph, { [name]: value }) : paragraph
        ));
        setParagraphList(updatedParagraphList);
    }

    const handleSelectChange = (name, value, id) => {
        const updatedParagraphList = paragraphList.map((paragraph) => (
            paragraph.id === id ? Object.assign(paragraph, { [name]: value }) : paragraph
        ));
        setParagraphList(updatedParagraphList);
    }

    const stringSkills = (skills) => {
        let skillNameList = []
        skills.forEach((element) => {
            skillNameList = [...skillNameList, element.label]
        })
        return skillNameList.join(',');
    }

    const deleteParagraph = (id) => {
        setParagraphList(paragraphList.filter((elem) => elem.id !== id))
    }

    const [skill, setSkill] = useState("");

    const deleteSkill = (skill, id) => {
        const updatedParagraphList = paragraphList.map((paragraph) => (
            paragraph.id === id ? Object.assign(paragraph, { ["skills"]: paragraph.skills.replace(skill + ',', '') }) : paragraph
        ));

        setParagraphList(updatedParagraphList);
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
                                        <HStack spacing={30} paddingTop={10}>
                                            <FormControl id="name" width="50%">
                                                <FormLabel>
                                                    <h4>
                                                        Blog title
                                                    </h4>
                                                </FormLabel>
                                                <Input
                                                    // onChange={(e) => setName(e.target.value)}
                                                    value={name}
                                                    focusBorderColor="brand.blue"
                                                    type="text"
                                                    placeholder="IT DEV" />
                                            </FormControl>
                                            <FormControl width="50%">
                                                <FormLabel htmlFor='tag'>Category</FormLabel>
                                                <CreatableSelect
                                                    maxMenuHeight={100}
                                                    isMulti
                                                    isClearable={true}
                                                    isSearchable
                                                    // onChange={(e) => { handleSelectChange("skills", stringSkills(e), paragraph.id); setSelectedSkill(e); }}
                                                    // value={getSkill(paragraph.skills)}
                                                    options={skillList} />
                                            </FormControl>
                                        </HStack>
                                        <HStack spacing={30} paddingTop={10}>
                                            <FormControl id="avatar" className='blog-thumbnail'>
                                                <FormLabel>Thumbnail</FormLabel>
                                                <Cover url={thumbnail} />
                                            </FormControl>
                                        </HStack>
                                        <HStack spacing={30} paddingTop={10}>
                                            <FormControl id="content" className="blog-content" style={{ "marginTop": "2vh" }}>
                                                <FormLabel>
                                                    <h5>
                                                        Blog content
                                                    </h5>
                                                </FormLabel>
                                                <ReactQuill
                                                    ref={quillRef}
                                                    style={{ width: "100%", margin: "0px", maxWidth: "100%" }}
                                                    theme="snow"
                                                    onChange={(e) => setDescription(e)}
                                                    value={description}
                                                    modules={modules}
                                                    formats={formats}
                                                    placeholder="Write about your content ....."
                                                />
                                            </FormControl>
                                        </HStack>

                                        <FormControl >
                                            <HStack spacing={30} mt={6}>
                                                <FormControl width="100%">
                                                    <FormLabel htmlFor='tag'>Tag</FormLabel>
                                                    <CreatableSelect
                                                        maxMenuHeight={100}
                                                        isMulti
                                                        isClearable={true}
                                                        isSearchable
                                                        // onChange={(e) => { handleSelectChange("skills", stringSkills(e), paragraph.id); setSelectedSkill(e); }}
                                                        // value={getSkill(paragraph.skills)}
                                                        options={skillList} />
                                                </FormControl>
                                            </HStack>
                                        </FormControl>
                                        <Button className='action-button btn-green' marginRight={"10vw"} colorScheme={'purple'} my={5} onClick={saveOrUpdate}>Save</Button>
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

export default Paragraph;