import React from "react";
import { Card,Col } from "react-bootstrap";

const User = (props) => {
  return (
    <Col md='3' style={{marginBottom: "1rem"}}>
        
      <Card>
        <Card.Body>
          <Card.Title>{props.userInfo.name}</Card.Title>
          <Card.Text>
           <p>{props.userInfo.email}</p>
           <p>{props.userInfo.gen}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default User;
