import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class UserstoriesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            difficulty: '',
        }
    }

    handleChangeInputName = async event => {
        const title = event.target.value
        this.setState({ title })
    }

    handleChangeInputRating = async event => {
        const description = event.target.validity.valid
            ? event.target.value
            : this.state.description

        this.setState({ description })
    }

    handleChangeInputTime = async event => {
        const difficulty = event.target.value
        this.setState({ difficulty })
    }

    handleIncludeUserstory = async () => {
        const { title, description, difficulty } = this.state
        
        const payload = { title, description, difficulty }

        await api.insertUserstory(payload).then(res => {
            window.alert(`Userstory inserted successfully`)
            this.setState({
                title: '',
                description: '',
                difficulty: '',
            })
        })
    }

    render() {
        const { title, description, difficulty } = this.state
        return (
            <Wrapper>
                <Title>Create Userstory</Title>

                <Label>Title: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeInputName}
                />

                <Label>Description: </Label>
                <InputText
                    type="text"
                    value={description}
                    onChange={this.handleChangeInputRating}
                />

                <Label>Difficulty: </Label>
                <InputText
                    type="number"
                    value={difficulty}
                    onChange={this.handleChangeInputTime}
                />

                <Button onClick={this.handleIncludeUserstory}>Add Userstory</Button>
                <CancelButton href={'/userstories/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default UserstoriesInsert