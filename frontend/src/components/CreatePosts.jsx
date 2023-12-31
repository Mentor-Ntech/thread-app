import { AddIcon } from '@chakra-ui/icons'
import { 
    Button,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
 } from '@chakra-ui/react'


const CreatePosts = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Button 
    position={'fixed'}
    bottom={10}
    right={10}
    leftIcon={<AddIcon/>}
    bg={"gray"}
    onClick={onOpen}
    >
        Post
    </Button>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Text
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreatePosts