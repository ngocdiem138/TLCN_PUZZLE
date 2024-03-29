import React, { useEffect, useRef, useState } from 'react';
import AvatarImg from '../assets/image/header-profile.png';
import defaultBlogImage from '../assets/image/wood-blog-placeholder.jpg'
import { UserServiceIml } from '../actions/user-actions';
import {
  Badge,
  Box,
  Button,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';


export default function Avatar(url) {
  const [avatarImage, setAvatarImage] = useState(null);
  const [borderRadiusValue, setBorderRadiusValue] = useState("50%");
  useEffect(() => {
    if (url.url && !avatarImage) {
      setAvatarImage(url.url)
    };
    if (url.borderRadius) {
      setBorderRadiusValue(url.borderRadius);
    }
  })
  const inputRef = useRef(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const openChooseFile = () => {
    inputRef.current.click()
  }

  const sendData = (file) => {
    if (url.parentCallback) {
      url.parentCallback(file);
    }
  }
  const handleChangeAvatar = event => {
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
    const selected = event.target.files[0]

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader()
      reader.onloadend = () => setAvatarImage(reader.result)
      const formData = new FormData();
      formData.append("file", selected);
      if (!url.parentCallback) {
        UserServiceIml.uploadUserAvatar(formData);
      } else {
        sendData(selected);
      }

      return reader.readAsDataURL(selected);
    }

    onOpen();
  }

  return (
    <Box h={60} w={60} margin='30px auto' padding={3} overflow="hidden">
      <Image
        w="full"
        h="full"
        objectFit="avatar"
        src={avatarImage ? avatarImage : borderRadiusValue === "0%" ? defaultBlogImage : AvatarImg}
        alt="Avatar"
        style={{ "border-radius": borderRadiusValue, "border": "6px solid white", "box-shadow": "0px 0px 0px 6px gray" }}
      />
      <Button
        onClick={openChooseFile}
        position="absolute"
        top={60}
        left={380}
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
  )
}
