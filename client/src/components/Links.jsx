import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/userstories/list" className="navbar-brand">
                    User Story Creator
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/userstories/list" className="nav-link">
                                List Userstory
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/userstories/create" className="nav-link">
                                Create Userstory
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links