import React,{ useRef } from 'react'
import { useForm } from "react-hook-form";
import { Text, Input, Button, Heading } from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/react"

function Form() {

    const { register, handleSubmit } = useForm()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const myForm = useRef()

    function clearItems() {
        localStorage.clear()
        window.location = window.location
    }

    const onSubmit = data => {
        const adName = data.name
        const adObject = {
            name: adName,
            ad: data.content
        }
        localStorage.setItem(adName, JSON.stringify(adObject))
        console.log(localStorage.getItem(adName))
        myForm.current.reset()
        window.location = window.location
    }
    return (
        <div>
            <Heading style={{ marginTop: "2rem", marginBottom: "2rem", textAlign: "center" }}>Make your own custom ad</Heading>
            <form onSubmit={handleSubmit(onSubmit)} ref={myForm}>
                <div style={{ marginBottom: "2rem" }} className="name-input">
                    <Text fontSize="2xl" />
                    <Input placeholder="Name of the ad" name="name" ref={register({ required: true })} />
                </div>
                <div style={{ marginBottom: "2rem" }} className="ad-input">
                    <Text fontSize="2xl" />
                    <Input placeholder="Content of the ad" name="content" ref={register({ required: true })} />
                </div>
                <div style={{ textAlign: "center" }} className="btn-container">
                    <Button colorScheme="blue" type="submit">Submit</Button>
                </div>
            </form>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Are you sure?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontSize="xl">Clicking yes will mean clearing custom made ads that you have made</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="red" mr={3} onClick={ () => { onClose(); clearItems() } }>
                            Yes
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <div style={{ marginTop: "2.5rem", textAlign: "center" }} className="clear-btn">
                <Button colorScheme="red" variant="solid" onClick={onOpen}>
                    Clear custom ads
                </Button>
            </div>
        </div>
    )
}

export default Form
