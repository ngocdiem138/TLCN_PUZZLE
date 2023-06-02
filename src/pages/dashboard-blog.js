import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Tag, TagCloseButton, TagLabel, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, FormControl, FormLabel, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack, Textarea, Select, Text, Col } from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';
import { BlogServiceIml, ParagraphServiceIml, UserServiceIml } from '../actions/user-actions';
import PageWrapper from '../components/PageWrapper';

import CreatableSelect, { useCreatable } from 'react-select/creatable';
import { Alert } from 'react-bootstrap';
import Cover from '../components/Cover';
import { API_BASE_URL } from '../utils/constants/url';

const Paragraph = () => {
    const quillRef = useRef();
    const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [thumbnail, setThumbnail] = useState("");
    const [tagList, setTagList] = useState([]);
    const [showError, setShowError] = useState(false);
    const [showError403, setShowError403] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [categoryList, setCategoryList] = useState([])
    useEffect(() => {
        BlogServiceIml.getAllCategory().then((response) => {
            if (response.data.data) {
                let categoryList1 = []
                response.data.data.forEach(element => {
                    categoryList1 = [...categoryList1, { value: element.id, label: element.name }]
                });
                setCategoryList(categoryList1);
            }
            else {

            }
        });
    }, [id])

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
    const saveOrUpdate = () => {
    }

    const stringSkills = (skills) => {
        let skillNameList = []
        skills.forEach((element) => {
            skillNameList = [...skillNameList, element.label]
        })
        return skillNameList.join(',');
    }

    const getCategory = (category) => {
        let arr = categoryList ? categoryList.split(',') : [];
        let categoryOjectList = []
        arr.forEach((element) => {
            categoryOjectList = [...categoryOjectList, { value: element, label: element }]
        })
        return categoryOjectList;
    }

    const findCategory = (id) => {
        categoryList.forEach((element) => {
            if (element.value == id) {
                setSelectedCategory(element)
                return element;
            }
        })
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
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    value={title}
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
                                                    onChange={(e) => { setCategoryId(e.value); setSelectedCategory(e); e.__isNew__ == true ? redirectNewCategory() : console.log(categoryId, e) }}
                                                    value={selectedCategory ? selectedCategory : findCategory(categoryId)}
                                                    options={categoryList} />
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
                                                        options={tagList} />
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