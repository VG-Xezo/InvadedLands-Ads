import React from 'react'
import { Text, Code, Button } from "@chakra-ui/react"
import { useClipboard } from "@chakra-ui/react"


function Ad(props) {

    const { hasCopied, onCopy } = useClipboard(props.ad)

    return (
        <div style={{ marginTop: "3rem", marginBottom: "3rem", textAlign: "center" }}>
            <Text fontSize="3xl" style={{ marginBottom: "2rem" }}>Your current ad is "{props.ad}"</Text>
            <Code>{props.ad}</Code>
            <div className="btn-container" style={{ textAlign: "center", marginTop: ".5rem" }}>
                <Button colorScheme="teal" variant="outline" onClick={onCopy}>
                    {hasCopied ? "Copied" : "Copy"}
                </Button>
            </div>
        </div>
    )
}

export default Ad
