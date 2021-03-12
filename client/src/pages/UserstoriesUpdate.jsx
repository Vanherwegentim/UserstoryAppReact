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

class UserstoriesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            description: '',
            difficulty: '',
        }
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value
        this.setState({ title })
    }

    handleChangeInputDescription = async event => {
        const description = event.target.validity.valid
            ? event.target.value
            : this.state.description

        this.setState({ description })
    }

    handleChangeInputDifficulty = async event => {
        const difficulty = event.target.value
        this.setState({ difficulty })
    }

    handleUpdateUserstory = async () => {
        const { id, title, description, difficulty } = this.state
       
        const payload = { title, description, difficulty }

        await api.updateUserstoryById(id, payload).then(res => {
            window.alert(`Userstory updated successfully`)
            this.setState({
                title: '',
                description: '',
                difficulty: '',
            })
        })
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
                <Title>Create Userstory</Title>

                <Label>Title: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeInputTitle}
                />

                <Label>Description: </Label>
                <InputText
                    type="text"
                    
                    value={description}
                    onChange={this.handleChangeInputDescription}
                />

                <Label>Difficulty: </Label>
                <InputText
                    type="number"
                    value={difficulty}
                    onChange={this.handleChangeInputDifficulty}
                />

                <Button onClick={this.handleUpdateUserstory}>Update Userstory</Button>
                <CancelButton href={'/userstories/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default UserstoriesUpdate