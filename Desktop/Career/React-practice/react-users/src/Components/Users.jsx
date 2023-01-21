import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row,} from 'react-bootstrap'
import User from './User'


const Users = (props) => {
  return (
    <Container>
    <Row>
        {
            props.userData.map((user,index) => {
                return <User userInfo={user} key={index}/>
            }
            )
        } 
    </Row>
    </Container>
  )
}

export default Users