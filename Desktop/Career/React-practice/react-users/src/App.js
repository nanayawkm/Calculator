import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container,Row,Col} from 'react-bootstrap'
import Users from './Components/Users'
import UserForm from './Components/UserForm';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [
        {
          name: 'Eric Rodgers',
          email: 'rodge2@gmail.com',
          gen: 12
        },
        {
          name: 'Sally Moses',
          email: 'Samo@gmail.com',
          gen: 21
        },
        {
          name: 'Herty Pamwell',
          email: 'herty@gmail.com',
          gen: 23
        }
      ]
    }
  }

addNewUser = (user) => {
  this.setState({
    users: [...this.state.users,user]
  })
}

  render() {
  return (
    <>
      <Container fluid style={{marginTop: "2rem"}}>
        <Row>
          <Col md='4'>
            <UserForm addUser ={this.addNewUser}/>
          </Col>
          <Col>
          <Users userData={this.state.users}/>
          </Col>
        </Row>
      </Container>
    </>
    );
  }
}

export default App;
