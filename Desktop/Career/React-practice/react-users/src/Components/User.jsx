import React from "react";
import { Card,Col } from "react-bootstrap";

const User = (props) => {
  return (
    <Col md='3' style={{marginBottom: "1rem"}}>
        
      <Card>
        <Card.Body>
          <Card.Title>Name: {props.userInfo.name}</Card.Title>
          <Card.Text>
           <p>Email: {props.userInfo.email}</p>
           <p>Gen: {props.userInfo.gen}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default User;
