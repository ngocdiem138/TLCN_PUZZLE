// import React, { useState, useRef, useEffect } from 'react';
// import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react';
// import ReactJsAlert from "reactjs-alert";
// import { Container, Alert } from 'react-bootstrap';
// import { logout } from '../actions/auth-actions';
// import { UserServiceIml } from '../actions/user-actions';
// import Cover from '../components/Cover';
// import PageWrapper from "../components/PageWrapper";
// import dynamic from 'next/dynamic';
// import AvatarImg from '../assets/image/l2/png/blog-img2.png';
// import {
//     Badge,
//     Box,
//     Button,
//     HStack,
//     Image,
//     Modal,
//     ModalBody,
//     ModalCloseButton,
//     ModalContent,
//     ModalFooter,
//     ModalHeader,
//     ModalOverlay,
//     Text,
//     useDisclosure,
// } from '@chakra-ui/react';
// import { EmployerServiceIml } from '../actions/employer-action';

// const CompanySettings = () => {

//     const [isEmployer, setIsEmployer] = useState(false);
//     useEffect(() => {
//         setIsEmployer(localStorage.getItem("userRole") == "EMPLOYER");
//     })
//     const [description, setDescription] = useState("");
//     const [name, setName] = useState("")
//     const [website, setWebsite] = useState("")
//     const [image, setImage] = useState("")
//     const [showError, setShowError] = useState(false)
//     const [showError403, setShowError403] = useState(false)
//     const [showSuccess, setShowSuccess] = useState(false)
//     const inputRef = useRef(null)
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const [avatarImage, setAvatarImage] = useState(null)
//     useEffect(() => {
//         if (image && !avatarImage) {
//             setAvatarImage(image)
//         }
//     })

//     const openChooseFile = () => {
//         inputRef.current.click()
//     }

//     const handleChangeAvatar = event => {
//         const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
//         const selected = event.target.files[0]

//         if (selected && ALLOWED_TYPES.includes(selected.type)) {
//             let reader = new FileReader()
//             reader.onloadend = () => setAvatarImage(reader.result)
//             // const formData = new FormData();
//             // formData.append("file", selected);
//             setImage(selected);
//             return reader.readAsDataURL(selected)
//         }

//         onOpen()
//     }
//     const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false
//     const modules = {
//         toolbar: [
//             [{ header: "1" }, { header: "2" }, { font: [] }],
//             [{ size: [] }],
//             ["bold", "italic", "underline", "strike", "blockquote"],
//             [
//                 { list: "ordered" },
//                 { list: "bullet" },
//                 { indent: "-1" },
//                 { indent: "+1" },
//             ],
//             ["link", "image"],
//             ["clean"],
//         ],
//         clipboard: {
//             matchVisual: false,
//         },
//     };

//     const formats = [
//         "header",
//         "font",
//         "size",
//         "bold",
//         "italic",
//         "underline",
//         "strike",
//         "blockquote",
//         "list",
//         "bullet",
//         "indent",
//         "link",
//         "image",
//     ];


//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append("name", name);
//         formData.append("website", website);
//         formData.append("description", description);
//         formData.append("image", image);
//         EmployerServiceIml.createCompany(formData).then((response) => {
//             if (response.data.errCode != "200" && response.data.errCode) {
//                 if(response.data.errCode == "403"){
//                     setShowError403(true);
//                 } else{
//                     setShowError(true);
//                     setShowSuccess(false);
//                 }
//             } else {
//                 setShowSuccess(true);
//                 setShowError(false);
//             }
//         })
//         // 
//     }
//     const redirect = () => {
//         logout();
//     }

//     return (
//         <>
//             <PageWrapper
//                 headerConfig={{
//                     button: "profile",
//                     isFluid: true,
//                     bgClass: "bg-default",
//                     reveal: false,
//                 }}
//             >
//                 <div
//                     className="dashboard-main-container mt-24 mt-lg-31"
//                     id="dashboard-body"
//                 >
//                     <div className="container">
//                         <div className="mb-15 mb-lg-23">
//                             <div className="row">
//                                 <div className="col-xxxl-9 px-lg-13 px-6">
//                                     <h5 className="font-size-6 font-weight-semibold mb-11">
//                                         Company Profile
//                                     </h5>
//                                     <div className="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13">
//                                         <ReactJsAlert
//                                             type="info"   // success, warning, error, info
//                                             title="Session has expired"   // title you want to display
//                                             status={showError403}  // true or false
//                                             button="OK"
//                                             color="#1d36ad"
//                                             quotes={true}
//                                             quote="Unfortunately your session has expired and you have been logged out. Please log in again"
//                                             Close={redirect}   // callback method for hide
//                                         />
//                                         {showError || showSuccess ?
//                                             <Alert
//                                                 variant={showError ? 'danger' : showSuccess ? 'success' : 'info'}>
//                                                 {showError ? 'Save fail' : showSuccess ? 'Save success' : 'info'}
//                                                 <div className="d-flex justify-content-end">
//                                                     <Button
//                                                         onClick={() => {
//                                                             setShowError(false);
//                                                             setShowSuccess(false)
//                                                         }}
//                                                         variant={showError ? 'outline-danger' : showSuccess ? 'outline-success' : 'outline-info'}>
//                                                         Close!
//                                                     </Button>
//                                                 </div>
//                                             </Alert>
//                                             : null
//                                         }
//                                         {isEmployer ?
//                                             <>
//                                                 <FormControl id="image">
//                                                     <FormLabel>Image</FormLabel>
//                                                     <Box h={60} w={60} margin='30px auto' padding={3} overflow="hidden">
//                                                         <Image
//                                                             w="full"
//                                                             h="full"
//                                                             objectFit="avatar"
//                                                             src={avatarImage ? avatarImage : AvatarImg}
//                                                             alt="Avatar"
//                                                             style={{ "border-radius": "50%", "border": "6px solid white", "box-shadow": "0px 0px 0px 6px gray" }}
//                                                         />
//                                                         <Button
//                                                             onClick={openChooseFile}
//                                                             position="absolute"
//                                                             top={60}
//                                                             style={{ "marginRight": "50%" }}
//                                                             variant="ghost"
//                                                         >
//                                                             <svg width="1.2em" fill="currentColor" viewBox="0 0 20 20">
//                                                                 <path
//                                                                     fillRule="evenodd"
//                                                                     clipRule="evenodd"
//                                                                     d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
//                                                                 />
//                                                             </svg>
//                                                             {/* <Text ml={2}>Change</Text> */}
//                                                             <input ref={inputRef} type="file" onChange={handleChangeAvatar} hidden />
//                                                         </Button>
//                                                         <Modal isOpen={isOpen} onClose={onClose}>
//                                                             <ModalOverlay />
//                                                             <ModalContent>
//                                                                 <ModalHeader>Something went wrong</ModalHeader>
//                                                                 <ModalCloseButton />
//                                                                 <ModalBody>
//                                                                     <Text>File not supported!</Text>
//                                                                     <HStack mt={1}>
//                                                                         <Text color="brand.cadet" fontSize="sm">
//                                                                             Supported types:
//                                                                         </Text>
//                                                                         <Badge colorScheme="green">PNG</Badge>
//                                                                         <Badge colorScheme="green">JPG</Badge>
//                                                                         <Badge colorScheme="green">JPEG</Badge>
//                                                                     </HStack>
//                                                                 </ModalBody>

//                                                                 <ModalFooter>
//                                                                     <Button onClick={onClose}>Close</Button>
//                                                                 </ModalFooter>
//                                                             </ModalContent>
//                                                         </Modal>
//                                                     </Box>
//                                                 </FormControl>
//                                                 <Grid
//                                                     templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
//                                                     gap={6}
//                                                 >

//                                                     <FormControl id="name">
//                                                         <FormLabel>Company Name</FormLabel>
//                                                         <Input
//                                                             // onChange={(e) => setName(e.target.value)}
//                                                             value={name}
//                                                             focusBorderColor="brand.blue"
//                                                             type="text"
//                                                             placeholder="Google" />
//                                                     </FormControl>
//                                                     <FormControl id="website">
//                                                         <FormLabel>Website</FormLabel>
//                                                         <Input
//                                                             onChange={(e) => setWebsite(e.target.value)}
//                                                             value={website}
//                                                             focusBorderColor="brand.blue"
//                                                             type="text"
//                                                             placeholder="diem cute" />
//                                                     </FormControl>
//                                                 </Grid>
//                                                 <FormControl id="description" style={{ "marginTop": "2vh" }}>
//                                                     <FormLabel>Description</FormLabel>
//                                                     <ReactQuill
//                                                         style={{ width: "100%", margin: "0px", maxWidth: "100%" }}
//                                                         theme="snow"
//                                                         onChange={(e) => setDescription(e)}
//                                                         value={description}
//                                                         modules={modules}
//                                                         formats={formats}
//                                                         placeholder="Write about company ....."
//                                                     />
//                                                 </FormControl>
//                                             </>
//                                             : null}

//                                         <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
//                                             <Button onClick={handleSubmit}>Update</Button>
//                                         </Box>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </PageWrapper>
//         </>
//     )
// }

// export default CompanySettings
