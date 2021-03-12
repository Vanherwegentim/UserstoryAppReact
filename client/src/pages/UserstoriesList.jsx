import React, { Component } from 'react'

import api from '../api'

import styled from 'styled-components'

import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 

const Wrapper = styled.div`
    padding: 40px 40px 40px 40px;
    text-align: center
    
`

const Update = styled.div`
    color: white;
    cursor: pointer;
    
`
const Show = styled.div`
    color: white;
    cursor: pointer;
    
`

const Delete = styled.div`
    color: white;
    cursor: pointer;
`

class UpdateUserstory extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/userstories/update/${this.props.id}`
    }

    render() {
        return <button style={{backgroundColor: "orange", borderRadius:8,  width:"95%", }} ><Update onClick={this.updateUser}>Update</Update></button>
    }
}

class ShowUserstory extends Component {
    showUser = event => {
        event.preventDefault()

        window.location.href = `/userstories/show/${this.props.id}`
        
    }
    render() {
        return <button style={{backgroundColor: "green", borderRadius:8,  width:"95%",}} ><Show onClick={this.showUser}>Show</Show></button>
    }
}
class DeleteUserstory extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the userstory ${this.props.id} permanently?`,
            )
        ) {
            api.deleteUserstoryById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <button style={{backgroundColor: "red", borderRadius:8,  width:"95%",}}><Delete onClick={this.deleteUser}>Delete</Delete></button>
    }
}

class UserstoriesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userstories: [],
            columns: [],
            isLoading: false,
        }
    }
    

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllUserstories().then(userstories => {
            this.setState({
                userstories: userstories.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { userstories, isLoading } = this.state
        console.log('TCL: UserstoriesList -> render -> userstories', userstories)

        const columns = [
            
            {
                Header: 'Title',
                accessor: 'title',
                filterable: true,
                width:300,


            },
            {
                Header: 'Description',
                accessor: 'description',
                filterable: true,
                width:300,
            },
            {
                Header: 'Difficulty',
                accessor: 'difficulty',
                
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <ShowUserstory id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteUserstory id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateUserstory id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!userstories.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={userstories}
                        columns={columns}
                        rowHeight={500}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                        
                    />
                )}
            </Wrapper>
        )
    }
}

export default UserstoriesList