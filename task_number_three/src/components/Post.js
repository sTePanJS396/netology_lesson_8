import React from 'react';
import { Card } from "react-bootstrap";

const Post = ({text, title, img}) => {
  return (
    <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {text}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Post