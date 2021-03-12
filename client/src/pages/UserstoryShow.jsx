import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const P = styled.p.attrs({
    className: "p",
})`margin: 10px;`

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;

`

const Label = styled.label`
    
`

class UserstoryShow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            description: '',
            difficulty: '',
        }
    }

    componentDidMount = async () => {
        const { id } = this.state
        const userstory = await api.getUserstoryById(id)

        this.setState({
            title: userstory.data.data.title,
            description: userstory.data.data.description,
            difficulty: userstory.data.data.difficulty,
        })
    }

    render() {
        const { title, description, difficulty } = this.state
        return (
            <Wrapper>
                <Title>Userstory</Title>

                <Label>Title: </Label>
                <P>{title}</P>

                <Label>Description: </Label>
                <P>{description}</P>
                    
                

                <Label>Difficulty: </Label>
                <P>{difficulty}</P>

            </Wrapper>
        )
    }

}
export default UserstoryShow