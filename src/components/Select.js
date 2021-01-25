import React from 'react'
import { Select } from "@chakra-ui/react"

function Options(props) {



    return (
        <div>
            <Select placeholder="Select ad" onChange={props.onchange}>
                {props.options.map((option) => {
                    return (
                        <option key={option.name} value={option.ad}>{option.name}</option>
                    )
                })}
            </Select>
        </div>
    )
}

export default Options
