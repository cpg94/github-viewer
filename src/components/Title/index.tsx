import React, { FunctionComponent } from 'react'
import { Container } from './Title.css'

const Title: FunctionComponent<{ title: string }> = ({ title }) => (
    <Container>
        {title}:
    </Container>
)

export default Title