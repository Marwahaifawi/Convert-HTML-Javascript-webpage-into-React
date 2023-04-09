import React from 'react'
import Button from '../button'
import { useState } from 'react'
const TextArea = ({enable , onChange}) => {
  return (
    <><textarea onChange={onChange} disabled={!enable}  id="textarea"></textarea></>
  )
}

export default TextArea