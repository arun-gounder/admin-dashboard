"use client"
import React, { useState } from 'react'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'

const Form = () => {
    const [formStep, setFormStep] = useState(3)
    const incrementStep = () => {
        setFormStep(step => step + 1)
    }

    const decrimentStep = () => {
        setFormStep(step => step - 1)
    }

    switch (formStep) {
        case 1:
            return <Form1 incrementStep={incrementStep} decrimentStep={decrimentStep} />
        case 2:
            return <Form2 ncrementStep={incrementStep} decrimentStep={decrimentStep} />
        case 3:
            return <Form3 ncrementStep={incrementStep} decrimentStep={decrimentStep} />
        default:
            return null
    }
}

export default Form