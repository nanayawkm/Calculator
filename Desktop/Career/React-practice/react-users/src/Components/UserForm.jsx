import React, { Component } from 'react'
import { Form,Button } from 'react-bootstrap'

export default class UserForm extends Component {
    constructor(props){
        super(props);
        this.state = {
         name: '',
         email:'',
         gen:''
        }
    }


handleSubmit = (e) => {
    e.preventDefault()
  
    this.setState({
        name: '', 
        email:'',
        gen:''
    })
}





  render() {
    return (
      <div>
    <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='name' value={this.state.name} onChange={this.handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={this.state.email} onChange={this.handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gen</Form.Label>
        <Form.Control type="number" placeholder="Enter Gen" name='gen' value={this.state.gen} onChange={this.handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
    )
  }
}
